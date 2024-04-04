'use client'

import { subscribeToNewsletter } from '@/actions'
import { Button } from '@/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { useFormStatus } from 'react-dom'
import { GoogleReCaptcha } from 'react-google-recaptcha-v3'
import { useForm } from 'react-hook-form'
import { useAsyncFn } from 'react-use'
import { z } from 'zod'

// Schema for form validation with Zod
const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  recaptcha: z.string().optional()
})
const formOptions = { resolver: zodResolver(formSchema) }
type SubcriptionFormData = z.infer<typeof formSchema>

export function Newsletter() {
  const { register, setValue, watch, formState } =
    useForm<SubcriptionFormData>(formOptions)
  const [state, onSubmit] = useAsyncFn(subscribeToNewsletter)
  const { pending } = useFormStatus()

  const recaptchaToken = watch('recaptcha')
  const email = watch('email')
  const isEmailValid =
    !formState.errors.email && email && email.match(/.+@.+\..+/)

  return (
    // <div className="z-10 w-full max-w-screen-xl p-4 mx-auto lg:px-6 lg:py-5">
    <section className="mx-auto flex max-w-screen-md flex-col gap-14 sm:text-center">
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Sign up for our newsletter
        </h2>
        <p className="mx-auto max-w-2xl font-light text-gray-500 dark:text-gray-400 sm:text-xl">
          Stay up to date with the roadmap progress, announcements and exclusive
          discounts feel free to sign up with your email.
        </p>
      </div>
      {state.value ? (
        <p>{state.value.data}</p>
      ) : (
        <form
          action={onSubmit}
          className="flex flex-col gap-5 md:flex-row"
          noValidate
        >
          <input
            {...register('email', { required: 'Email is required' })}
            placeholder="Enter your email"
            type="email"
            className="block w-full rounded-md border-gray-300 p-3 md:max-w-[80%]"
            required
          />
          {formState.errors.email && (
            <p role="alert">{formState.errors.email?.message}</p>
          )}
          <input type="hidden" {...register('recaptcha', { required: true })} />
          <GoogleReCaptcha
            onVerify={v => setValue('recaptcha', v.toString() || '')}
          />
          <Button
            type="submit"
            variant="secondary"
            size="lg"
            className="my-0 w-full py-6 text-lg md:max-w-[20%]"
            disabled={
              !recaptchaToken ||
              Boolean(formState.errors.email) ||
              !isEmailValid ||
              pending
            }
          >
            {pending ? 'Subscribing ...' : 'Subscribe'}
          </Button>
        </form>
      )}
    </section>
    // </div>
  )
}
