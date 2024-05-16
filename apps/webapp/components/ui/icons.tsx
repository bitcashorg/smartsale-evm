'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'

function IconNextChat({
  className,
  inverted,
  ...props
}: React.ComponentProps<'svg'> & { inverted?: boolean }) {
  const id = React.useId()

  return (
    <svg
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('size-4', className)}
      {...props}
    >
      <defs>
        <linearGradient
          id={`gradient-${id}-1`}
          x1="10.6889"
          y1="10.3556"
          x2="13.8445"
          y2="14.2667"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={inverted ? 'white' : 'black'} />
          <stop
            offset={1}
            stopColor={inverted ? 'white' : 'black'}
            stopOpacity={0}
          />
        </linearGradient>
        <linearGradient
          id={`gradient-${id}-2`}
          x1="11.7555"
          y1="4.8"
          x2="11.7376"
          y2="9.50002"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={inverted ? 'white' : 'black'} />
          <stop
            offset={1}
            stopColor={inverted ? 'white' : 'black'}
            stopOpacity={0}
          />
        </linearGradient>
      </defs>
      <path
        d="M1 16L2.58314 11.2506C1.83084 9.74642 1.63835 8.02363 2.04013 6.39052C2.4419 4.75741 3.41171 3.32057 4.776 2.33712C6.1403 1.35367 7.81003 0.887808 9.4864 1.02289C11.1628 1.15798 12.7364 1.8852 13.9256 3.07442C15.1148 4.26363 15.842 5.83723 15.9771 7.5136C16.1122 9.18997 15.6463 10.8597 14.6629 12.224C13.6794 13.5883 12.2426 14.5581 10.6095 14.9599C8.97637 15.3616 7.25358 15.1692 5.74942 14.4169L1 16Z"
        fill={inverted ? 'black' : 'white'}
        stroke={inverted ? 'black' : 'white'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <mask
        id="mask0_91_2047"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x={1}
        y={0}
        width={16}
        height={16}
      >
        <circle cx={9} cy={8} r={8} fill={inverted ? 'black' : 'white'} />
      </mask>
      <g mask="url(#mask0_91_2047)">
        <circle cx={9} cy={8} r={8} fill={inverted ? 'black' : 'white'} />
        <path
          d="M14.2896 14.0018L7.146 4.8H5.80005V11.1973H6.87681V6.16743L13.4444 14.6529C13.7407 14.4545 14.0231 14.2369 14.2896 14.0018Z"
          fill={`url(#gradient-${id}-1)`}
        />
        <rect
          x="11.2222"
          y="4.8"
          width="1.06667"
          height="6.4"
          fill={`url(#gradient-${id}-2)`}
        />
      </g>
    </svg>
  )
}

function IconOpenAI({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('size-4', className)}
      {...props}
    >
      <title>OpenAI icon</title>
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
    </svg>
  )
}

function IconVercel({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      aria-label="Vercel logomark"
      role="img"
      viewBox="0 0 74 64"
      className={cn('size-4', className)}
      {...props}
    >
      <path
        d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"
        fill="currentColor"
      ></path>
    </svg>
  )
}

function IconGitHub({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <title>GitHub</title>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

function IconSeparator({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      fill="none"
      shapeRendering="geometricPrecision"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M16.88 3.549L7.12 20.451"></path>
    </svg>
  )
}

function IconArrowDown({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="m205.66 149.66-72 72a8 8 0 0 1-11.32 0l-72-72a8 8 0 0 1 11.32-11.32L120 196.69V40a8 8 0 0 1 16 0v156.69l58.34-58.35a8 8 0 0 1 11.32 11.32Z" />
    </svg>
  )
}

function IconArrowRight({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="m221.66 133.66-72 72a8 8 0 0 1-11.32-11.32L196.69 136H40a8 8 0 0 1 0-16h156.69l-58.35-58.34a8 8 0 0 1 11.32-11.32l72 72a8 8 0 0 1 0 11.32Z" />
    </svg>
  )
}

function IconUser({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8ZM72 96a56 56 0 1 1 56 56 56.06 56.06 0 0 1-56-56Z" />
    </svg>
  )
}

function IconPlus({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M224 128a8 8 0 0 1-8 8h-80v80a8 8 0 0 1-16 0v-80H40a8 8 0 0 1 0-16h80V40a8 8 0 0 1 16 0v80h80a8 8 0 0 1 8 8Z" />
    </svg>
  )
}

function IconArrowElbow({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M200 32v144a8 8 0 0 1-8 8H67.31l34.35 34.34a8 8 0 0 1-11.32 11.32l-48-48a8 8 0 0 1 0-11.32l48-48a8 8 0 0 1 11.32 11.32L67.31 168H184V32a8 8 0 0 1 16 0Z" />
    </svg>
  )
}

function IconSpinner({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4 animate-spin', className)}
      {...props}
    >
      <path d="M232 128a104 104 0 0 1-208 0c0-41 23.81-78.36 60.66-95.27a8 8 0 0 1 6.68 14.54C60.15 61.59 40 93.27 40 128a88 88 0 0 0 176 0c0-34.73-20.15-66.41-51.34-80.73a8 8 0 0 1 6.68-14.54C208.19 49.64 232 87 232 128Z" />
    </svg>
  )
}

function IconMessage({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M216 48H40a16 16 0 0 0-16 16v160a15.84 15.84 0 0 0 9.25 14.5A16.05 16.05 0 0 0 40 240a15.89 15.89 0 0 0 10.25-3.78.69.69 0 0 0 .13-.11L82.5 208H216a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16ZM40 224Zm176-32H82.5a16 16 0 0 0-10.3 3.75l-.12.11L40 224V64h176Z" />
    </svg>
  )
}

function IconTrash({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M216 48h-40v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H40a8 8 0 0 0 0 16h8v144a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16V64h8a8 8 0 0 0 0-16ZM96 40a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v8H96Zm96 168H64V64h128Zm-80-104v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm48 0v64a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Z" />
    </svg>
  )
}

function IconRefresh({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M197.67 186.37a8 8 0 0 1 0 11.29C196.58 198.73 170.82 224 128 224c-37.39 0-64.53-22.4-80-39.85V208a8 8 0 0 1-16 0v-48a8 8 0 0 1 8-8h48a8 8 0 0 1 0 16H55.44C67.76 183.35 93 208 128 208c36 0 58.14-21.46 58.36-21.68a8 8 0 0 1 11.31.05ZM216 40a8 8 0 0 0-8 8v23.85C192.53 54.4 165.39 32 128 32c-42.82 0-68.58 25.27-69.66 26.34a8 8 0 0 0 11.3 11.34C69.86 69.46 92 48 128 48c35 0 60.24 24.65 72.56 40H168a8 8 0 0 0 0 16h48a8 8 0 0 0 8-8V48a8 8 0 0 0-8-8Z" />
    </svg>
  )
}

function IconStop({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88Zm24-120h-48a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h48a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8Zm-8 48h-32v-32h32Z" />
    </svg>
  )
}

function IconSidebar({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16ZM40 56h40v144H40Zm176 144H96V56h120v144Z" />
    </svg>
  )
}

function IconMoon({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M233.54 142.23a8 8 0 0 0-8-2 88.08 88.08 0 0 1-109.8-109.8 8 8 0 0 0-10-10 104.84 104.84 0 0 0-52.91 37A104 104 0 0 0 136 224a103.09 103.09 0 0 0 62.52-20.88 104.84 104.84 0 0 0 37-52.91 8 8 0 0 0-1.98-7.98Zm-44.64 48.11A88 88 0 0 1 65.66 67.11a89 89 0 0 1 31.4-26A106 106 0 0 0 96 56a104.11 104.11 0 0 0 104 104 106 106 0 0 0 14.92-1.06 89 89 0 0 1-26.02 31.4Z" />
    </svg>
  )
}

function IconSun({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0Zm72 88a64 64 0 1 1-64-64 64.07 64.07 0 0 1 64 64Zm-16 0a48 48 0 1 0-48 48 48.05 48.05 0 0 0 48-48ZM58.34 69.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32ZM192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72Zm5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8Zm80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8Zm112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16Z" />
    </svg>
  )
}

function IconCopy({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M216 32H88a8 8 0 0 0-8 8v40H40a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-40h40a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8Zm-56 176H48V96h112Zm48-48h-32V88a8 8 0 0 0-8-8H96V48h112Z" />
    </svg>
  )
}

function IconCheck({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="m229.66 77.66-128 128a8 8 0 0 1-11.32 0l-56-56a8 8 0 0 1 11.32-11.32L96 188.69 218.34 66.34a8 8 0 0 1 11.32 11.32Z" />
    </svg>
  )
}

function IconDownload({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M224 152v56a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-56a8 8 0 0 1 16 0v56h160v-56a8 8 0 0 1 16 0Zm-101.66 5.66a8 8 0 0 0 11.32 0l40-40a8 8 0 0 0-11.32-11.32L136 132.69V40a8 8 0 0 0-16 0v92.69l-26.34-26.35a8 8 0 0 0-11.32 11.32Z" />
    </svg>
  )
}

function IconClose({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M205.66 194.34a8 8 0 0 1-11.32 11.32L128 139.31l-66.34 66.35a8 8 0 0 1-11.32-11.32L116.69 128 50.34 61.66a8 8 0 0 1 11.32-11.32L128 116.69l66.34-66.35a8 8 0 0 1 11.32 11.32L139.31 128Z" />
    </svg>
  )
}

function IconEdit({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={cn('size-4', className)}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
      />
    </svg>
  )
}

function IconShare({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={cn('size-4', className)}
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="m237.66 106.35-80-80A8 8 0 0 0 144 32v40.35c-25.94 2.22-54.59 14.92-78.16 34.91-28.38 24.08-46.05 55.11-49.76 87.37a12 12 0 0 0 20.68 9.58c11-11.71 50.14-48.74 107.24-52V192a8 8 0 0 0 13.66 5.65l80-80a8 8 0 0 0 0-11.3ZM160 172.69V144a8 8 0 0 0-8-8c-28.08 0-55.43 7.33-81.29 21.8a196.17 196.17 0 0 0-36.57 26.52c5.8-23.84 20.42-46.51 42.05-64.86C99.41 99.77 127.75 88 152 88a8 8 0 0 0 8-8V51.32L220.69 112Z" />
    </svg>
  )
}

function IconUsers({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={cn('size-4', className)}
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M117.25 157.92a60 60 0 1 0-66.5 0 95.83 95.83 0 0 0-47.22 37.71 8 8 0 1 0 13.4 8.74 80 80 0 0 1 134.14 0 8 8 0 0 0 13.4-8.74 95.83 95.83 0 0 0-47.22-37.71ZM40 108a44 44 0 1 1 44 44 44.05 44.05 0 0 1-44-44Zm210.14 98.7a8 8 0 0 1-11.07-2.33A79.83 79.83 0 0 0 172 168a8 8 0 0 1 0-16 44 44 0 1 0-16.34-84.87 8 8 0 1 1-5.94-14.85 60 60 0 0 1 55.53 105.64 95.83 95.83 0 0 1 47.22 37.71 8 8 0 0 1-2.33 11.07Z" />
    </svg>
  )
}

function IconExternalLink({
  className,
  ...props
}: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={cn('size-4', className)}
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M224 104a8 8 0 0 1-16 0V59.32l-66.33 66.34a8 8 0 0 1-11.32-11.32L196.68 48H152a8 8 0 0 1 0-16h64a8 8 0 0 1 8 8Zm-40 24a8 8 0 0 0-8 8v72H48V80h72a8 8 0 0 0 0-16H48a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-72a8 8 0 0 0-8-8Z" />
    </svg>
  )
}

function IconChevronUpDown({
  className,
  ...props
}: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={cn('size-4', className)}
      viewBox="0 0 256 256"
      {...props}
    >
      <path d="M181.66 170.34a8 8 0 0 1 0 11.32l-48 48a8 8 0 0 1-11.32 0l-48-48a8 8 0 0 1 11.32-11.32L128 212.69l42.34-42.35a8 8 0 0 1 11.32 0Zm-96-84.68L128 43.31l42.34 42.35a8 8 0 0 0 11.32-11.32l-48-48a8 8 0 0 0-11.32 0l-48 48a8 8 0 0 0 11.32 11.32Z" />
    </svg>
  )
}

function IconTwitterX({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 24 22"
      className={cn('size-4 [&_path]:m-auto', className)}
      {...props}
    >
      <path d="M18.0405 6.10352e-05H21.5551L13.8789 8.89477L22.9091 21.0001H15.8402L10.2996 13.6602L3.96752 21.0001H0.448027L8.65687 11.4844L0 6.10352e-05H7.24807L12.251 6.70895L18.0405 6.10352e-05ZM16.806 18.8698H18.7524L6.18774 2.01929H4.09695L16.806 18.8698Z" />
    </svg>
  )
}

function IconDownRightArrow({
  className,
  ...props
}: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 19 19"
      fill="none"
      className={cn('size-4', className)}
      {...props}
    >
      <path
        d="M16.9714 2.14282L16.9714 17.1999L1.91432 17.1999"
        stroke="black"
        strokeWidth="2.7"
        strokeLinecap="round"
      />
      <path
        d="M15.6429 16.1059L2.03985 2.5029"
        stroke="black"
        strokeWidth="2.7"
        strokeLinecap="round"
      />
    </svg>
  )
}

function IconBitlauncher({
  className,
  iconOnly,
  ...props
}: React.ComponentProps<'svg'> & { iconOnly?: boolean }) {
  return iconOnly ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 53 51"
      fill="none"
      className={cn('size-14', className)}
    >
      <path
        d="M24.7956 4L4 46.1609L16.4975 38.9027C19.9986 36.8693 22.2889 33.257 22.6345 29.223L24.7956 4Z"
        fill="white"
      />
      <path
        d="M27.6442 4.28338L48.4397 45.8745L35.9936 38.7439C32.4626 36.7208 30.1466 33.0963 29.7945 29.042L27.6442 4.28338Z"
        fill="white"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 207 43"
      className={cn('h-11 w-56', className)}
      {...props}
    >
      <path
        d="M21.2095 0L0 43L12.702 35.623C16.3005 33.5331 18.6545 29.8203 19.0097 25.674L21.2095 0Z"
        fill="white"
      />
      <path
        d="M24.1153 0.289551L45.3247 42.7085L32.6755 35.4615C29.0463 33.3821 26.6659 29.6567 26.3039 25.4897L24.1153 0.289551Z"
        fill="white"
      />
      <path
        d="M62.2108 15.1439C63.5125 15.1439 64.6913 15.4716 65.7472 16.1269C66.8122 16.7732 67.6451 17.6699 68.2459 18.8168C68.8466 19.9546 69.147 21.2199 69.147 22.6126C69.147 24.0053 68.8466 25.2751 68.2459 26.4221C67.6451 27.5599 66.8122 28.4565 65.7472 29.1119C64.6913 29.7582 63.5125 30.0813 62.2108 30.0813C60.3356 30.0813 58.7882 29.3986 57.5684 28.0332V29.74H53.9365V9.60034H57.5684V17.1783C58.7791 15.822 60.3265 15.1439 62.2108 15.1439ZM61.4871 26.5586C62.6159 26.5586 63.5489 26.1854 64.2862 25.439C65.0326 24.6835 65.4058 23.7413 65.4058 22.6126C65.4058 21.4839 65.0326 20.5463 64.2862 19.7999C63.5489 19.0444 62.6159 18.6666 61.4871 18.6666C60.3675 18.6666 59.4345 19.0444 58.6881 19.7999C57.9416 20.5554 57.5684 21.493 57.5684 22.6126C57.5684 23.7322 57.9416 24.6698 58.6881 25.4253C59.4345 26.1808 60.3675 26.5586 61.4871 26.5586Z"
        fill="white"
      />
      <path
        d="M75.264 12.7271C74.8271 13.164 74.2855 13.3825 73.6392 13.3825C72.9929 13.3825 72.4467 13.164 72.0007 12.7271C71.5638 12.2902 71.3453 11.7531 71.3453 11.1159C71.3453 10.4787 71.5638 9.94169 72.0007 9.50476C72.4467 9.06783 72.9929 8.84937 73.6392 8.84937C74.2855 8.84937 74.8271 9.06783 75.264 9.50476C75.71 9.94169 75.9331 10.4787 75.9331 11.1159C75.9331 11.7531 75.71 12.2902 75.264 12.7271ZM71.8232 29.74V15.4852H75.4552V29.74H71.8232Z"
        fill="white"
      />
      <path
        d="M87.7028 18.8031H83.866V24.729C83.866 25.9487 84.5214 26.5586 85.8322 26.5586C86.3875 26.5586 87.011 26.3993 87.7028 26.0807V29.4669C86.9473 29.8765 86.0598 30.0813 85.0403 30.0813C83.4473 30.0813 82.2458 29.6581 81.4356 28.8115C80.6346 27.9559 80.2341 26.7907 80.2341 25.3161V18.8031H77.9675V15.4852H80.2341V11.8669H83.866V15.4852H87.7028V18.8031Z"
        fill="white"
      />
      <path d="M90.3926 29.74V9.60034H94.0246V29.74H90.3926Z" fill="white" />
      <path
        d="M108.293 15.4852H111.925V29.74H108.293V28.0332C107.046 29.3986 105.499 30.0813 103.651 30.0813C101.666 30.0813 100.01 29.3668 98.6806 27.9377C97.3516 26.5085 96.6871 24.7335 96.6871 22.6126C96.6871 20.4917 97.3516 18.7167 98.6806 17.2875C100.01 15.8584 101.666 15.1439 103.651 15.1439C105.508 15.1439 107.055 15.822 108.293 17.1783V15.4852ZM104.347 26.5586C105.476 26.5586 106.413 26.1808 107.16 25.4253C107.915 24.6698 108.293 23.7322 108.293 22.6126C108.293 21.493 107.915 20.5554 107.16 19.7999C106.413 19.0444 105.476 18.6666 104.347 18.6666C103.227 18.6666 102.294 19.0444 101.548 19.7999C100.802 20.5554 100.428 21.493 100.428 22.6126C100.428 23.7322 100.802 24.6698 101.548 25.4253C102.294 26.1808 103.227 26.5586 104.347 26.5586Z"
        fill="white"
      />
      <path
        d="M121.811 30.0813C119.799 30.0813 118.188 29.5352 116.977 28.4429C115.766 27.3414 115.161 25.8805 115.161 24.0599V15.4852H118.793V23.5547C118.793 24.465 119.066 25.1932 119.612 25.7394C120.167 26.2855 120.9 26.5586 121.811 26.5586C122.721 26.5586 123.449 26.2855 123.995 25.7394C124.55 25.1932 124.828 24.465 124.828 23.5547V15.4852H128.46V24.0599C128.46 25.8714 127.85 27.3278 126.63 28.4292C125.42 29.5306 123.813 30.0813 121.811 30.0813Z"
        fill="white"
      />
      <path
        d="M139.875 15.1439C141.559 15.1439 142.906 15.6491 143.916 16.6595C144.936 17.6607 145.446 18.9988 145.446 20.6737V29.74H141.8V21.848C141.8 20.8831 141.513 20.1139 140.94 19.5405C140.375 18.9579 139.62 18.6666 138.673 18.6666C137.681 18.6666 136.875 18.967 136.256 19.5678C135.647 20.1594 135.342 20.9423 135.342 21.9162V29.74H131.71V15.4852H135.342V17.0691C136.489 15.7856 138 15.1439 139.875 15.1439Z"
        fill="white"
      />
      <path
        d="M155.495 30.0813C153.319 30.0813 151.494 29.3668 150.02 27.9377C148.554 26.5085 147.821 24.7335 147.821 22.6126C147.821 20.4917 148.554 18.7167 150.02 17.2875C151.494 15.8584 153.319 15.1439 155.495 15.1439C156.915 15.1439 158.198 15.4625 159.345 16.0996C160.501 16.7368 161.407 17.6016 162.063 18.6939L158.895 20.5918C158.567 20.0092 158.103 19.545 157.502 19.1991C156.91 18.8441 156.241 18.6666 155.495 18.6666C154.375 18.6666 153.442 19.0444 152.696 19.7999C151.949 20.5554 151.576 21.493 151.576 22.6126C151.576 23.7322 151.949 24.6698 152.696 25.4253C153.442 26.1808 154.375 26.5586 155.495 26.5586C156.232 26.5586 156.901 26.3857 157.502 26.0398C158.103 25.6848 158.567 25.2114 158.895 24.6197L162.063 26.5176C161.407 27.6191 160.501 28.4884 159.345 29.1256C158.198 29.7627 156.915 30.0813 155.495 30.0813Z"
        fill="white"
      />
      <path
        d="M172.481 15.1439C174.165 15.1439 175.512 15.6491 176.522 16.6595C177.542 17.6607 178.051 18.9988 178.051 20.6737V29.74H174.406V21.848C174.406 20.8831 174.124 20.1139 173.559 19.5405C172.995 18.9579 172.244 18.6666 171.306 18.6666C170.305 18.6666 169.495 18.967 168.876 19.5678C168.257 20.1594 167.947 20.9423 167.947 21.9162V29.74H164.315V9.60034H167.947V17.151C169.094 15.8129 170.605 15.1439 172.481 15.1439Z"
        fill="white"
      />
      <path
        d="M195.501 22.6399C195.501 23.095 195.474 23.5229 195.419 23.9234H184.373C184.628 24.8246 185.115 25.5391 185.834 26.0671C186.553 26.595 187.427 26.859 188.456 26.859C189.284 26.859 190.044 26.6952 190.736 26.3675C191.428 26.0307 191.974 25.6074 192.374 25.0976L194.805 27.2277C194.049 28.1288 193.112 28.8297 191.992 29.3304C190.882 29.831 189.666 30.0813 188.346 30.0813C186.854 30.0813 185.502 29.7536 184.291 29.0983C183.081 28.4429 182.134 27.5417 181.451 26.3948C180.768 25.2387 180.427 23.9598 180.427 22.558C180.427 21.1744 180.755 19.9182 181.41 18.7895C182.075 17.6516 182.985 16.7596 184.141 16.1133C185.306 15.467 186.594 15.1439 188.005 15.1439C190.144 15.1439 191.928 15.8584 193.357 17.2875C194.787 18.7076 195.501 20.4917 195.501 22.6399ZM190.285 19.1308C189.63 18.5938 188.861 18.3252 187.978 18.3252C187.095 18.3252 186.326 18.5938 185.67 19.1308C185.015 19.6588 184.573 20.3688 184.346 21.2609H191.623C191.396 20.3688 190.95 19.6588 190.285 19.1308Z"
        fill="white"
      />
      <path
        d="M205.783 15.2531H206.397V19.0079H205.783C204.49 19.0079 203.48 19.3629 202.751 20.073C202.032 20.783 201.673 21.7478 201.673 22.9676V29.74H198.041V15.4852H201.673V17.3285C202.765 15.9449 204.135 15.2531 205.783 15.2531Z"
        fill="white"
      />
    </svg>
  )
}

function IconDiscord({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 23"
      x="0px"
      y="0px"
      fill="none"
      className={cn('size-4', className)}
      {...props}
    >
      <path d="M25.4335 1.91748C25.4247 1.9011 25.4102 1.88848 25.3926 1.882C23.449 0.995816 21.398 0.363665 19.2908 0.00134244C19.2719 -0.002105 19.2523 0.000444485 19.235 0.00863086C19.2176 0.0168172 19.2032 0.0302268 19.1939 0.0469649C18.9144 0.550987 18.6607 1.0687 18.4337 1.59813C16.1611 1.25539 13.8494 1.25539 11.5768 1.59813C11.3489 1.06739 11.0917 0.549549 10.8064 0.0469649C10.7966 0.0307255 10.7821 0.017734 10.7649 0.00961841C10.7477 0.00150278 10.7284 -0.00137612 10.7095 0.00134244C8.59865 0.362033 6.54404 0.99423 4.59747 1.882C4.5804 1.88919 4.5661 1.90162 4.55666 1.91748C0.669045 7.69125 -0.397243 13.318 0.123146 18.8789C0.12462 18.8929 0.12901 18.9064 0.136037 18.9186C0.143063 18.9308 0.152573 18.9415 0.163961 18.9498C2.42849 20.6141 4.96099 21.8842 7.65349 22.7061C7.67284 22.712 7.69358 22.7118 7.7128 22.7054C7.73201 22.6991 7.74874 22.6869 7.76063 22.6706C8.33833 21.8892 8.85025 21.0618 9.29118 20.1968C9.29705 20.1849 9.30039 20.172 9.30098 20.1587C9.30157 20.1455 9.2994 20.1323 9.29461 20.1199C9.28982 20.1075 9.28252 20.0963 9.27315 20.0868C9.26378 20.0774 9.25255 20.07 9.24017 20.065C8.43128 19.7571 7.64824 19.3859 6.89841 18.9549C6.88516 18.9468 6.87406 18.9357 6.86603 18.9225C6.858 18.9093 6.85329 18.8944 6.85229 18.879C6.85129 18.8636 6.85403 18.8481 6.86028 18.834C6.86653 18.8199 6.87611 18.8074 6.88821 18.7978C7.04637 18.6812 7.20452 18.5595 7.35248 18.4379C7.36553 18.4265 7.38157 18.419 7.39873 18.4163C7.41589 18.4136 7.43346 18.4158 7.44941 18.4226C12.3574 20.648 17.6735 20.648 22.5254 18.4226C22.5409 18.4151 22.5582 18.4121 22.5753 18.4139C22.5925 18.4157 22.6088 18.4222 22.6223 18.4328C22.7703 18.5544 22.9284 18.6812 23.0866 18.7978C23.0987 18.8074 23.1083 18.8199 23.1145 18.834C23.1208 18.8481 23.1235 18.8636 23.1225 18.879C23.1215 18.8944 23.1168 18.9093 23.1088 18.9225C23.1008 18.9357 23.0896 18.9468 23.0764 18.9549C22.3285 19.3881 21.5451 19.7578 20.7346 20.06C20.7223 20.0649 20.711 20.0723 20.7017 20.0818C20.6923 20.0912 20.685 20.1024 20.6802 20.1148C20.6754 20.1272 20.6732 20.1404 20.6738 20.1537C20.6744 20.1669 20.6778 20.1799 20.6836 20.1918C21.1323 21.0524 21.6438 21.8792 22.2142 22.6655C22.2261 22.6818 22.2428 22.694 22.262 22.7004C22.2812 22.7067 22.302 22.707 22.3213 22.701C25.0216 21.8828 27.5614 20.6125 29.8313 18.9448C29.8429 18.9366 29.8526 18.9261 29.8596 18.9138C29.8667 18.9015 29.8709 18.8879 29.8721 18.8738C30.4945 12.4512 28.8211 6.87004 25.4335 1.91748ZM10.0259 15.4927C8.54631 15.4927 7.33207 14.1443 7.33207 12.4917C7.33207 10.8392 8.52591 9.48573 10.0259 9.48573C11.5411 9.48573 12.7451 10.8443 12.7196 12.4867C12.7196 14.1443 11.5258 15.4927 10.0259 15.4927ZM19.9949 15.4927C18.5153 15.4927 17.3011 14.1443 17.3011 12.4917C17.3011 10.8392 18.4898 9.48573 19.9949 9.48573C21.5101 9.48573 22.7142 10.8443 22.6887 12.4867C22.6887 14.1443 21.505 15.4927 19.9949 15.4927Z" />
    </svg>
  )
}

function IconTelegram({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      className={cn('flex size-4 items-center justify-center', className)}
      {...props}
    >
      <path d="M5.83,23.616c12.568-5.529,28.832-12.27,31.077-13.203c5.889-2.442,7.696-1.974,6.795,3.434 c-0.647,3.887-2.514,16.756-4.002,24.766c-0.883,4.75-2.864,5.313-5.979,3.258c-1.498-0.989-9.059-5.989-10.7-7.163 c-1.498-1.07-3.564-2.357-0.973-4.892c0.922-0.903,6.966-6.674,11.675-11.166c0.617-0.59-0.158-1.559-0.87-1.086 c-6.347,4.209-15.147,10.051-16.267,10.812c-1.692,1.149-3.317,1.676-6.234,0.838c-2.204-0.633-4.357-1.388-5.195-1.676 C1.93,26.43,2.696,24.995,5.83,23.616z" />
    </svg>
  )
}

function IconUSFlag({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <g clipPath="url(#clip0_6090_421)">
        <g clipPath="url(#clip1_6090_421)">
          <g clipPath="url(#clip2_6090_421)">
            <path
              d="M20.3047 0.75H0.304688V20.75H20.3047V0.75Z"
              fill="url(#pattern0)"
            />
          </g>
        </g>
      </g>
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_6090_421" transform="scale(0.00195312)" />
        </pattern>
        <clipPath id="clip0_6090_421">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(0.304688 0.75)"
          />
        </clipPath>
        <clipPath id="clip1_6090_421">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(0.304688 0.75)"
          />
        </clipPath>
        <clipPath id="clip2_6090_421">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(0.304688 0.75)"
          />
        </clipPath>
        <image
          id="image0_6090_421"
          width="512"
          height="512"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  )
}

function IconESFlag({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      {...props}
    >
      <rect width="18" height="18" fill="url(#patternESFlagIcon0)" />
      <defs>
        <pattern
          id="patternESFlagIcon0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#imageESFlagIcon0" transform="scale(0.00195312)" />
        </pattern>
        <image
          id="imageESFlagIcon0"
          width="512"
          height="512"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  )
}

function IconCNFlag({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      {...props}
    >
      <rect width="18" height="18" fill="url(#patternCNFlagIcon0)" />
      <defs>
        <pattern
          id="patternCNFlagIcon0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#imageCNFlagIcon0" transform="scale(0.00195312)" />
        </pattern>
        <image
          id="imageCNFlagIcon0"
          width="512"
          height="512"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  )
}

function IconIDFlag({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
      {...props}
    >
      <mask id="a">
        <circle cx="256" cy="256" r="256" fill="#fff" />
      </mask>
      <g mask="url(#a)">
        <path fill="#eee" d="m0 256 249.6-41.3L512 256v256H0z" />
        <path fill="#a2001d" d="M0 0h512v256H0z" />
      </g>
    </svg>
  )
}

function IconVNFlag({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
      {...props}
    >
      <mask id="a">
        <circle cx="256" cy="256" r="256" fill="#fff" />
      </mask>
      <g mask="url(#a)">
        <path fill="#d80027" d="M0 0h512v512H0z" />
        <path
          fill="#ffda44"
          d="m256 133.6 27.6 85H373L300.7 271l27.6 85-72.3-52.5-72.3 52.6 27.6-85-72.3-52.6h89.4z"
        />
      </g>
    </svg>
  )
}

export {
  IconArrowDown,
  IconArrowElbow,
  IconArrowRight,
  IconBitlauncher,
  IconCheck,
  IconChevronUpDown,
  IconClose,
  IconCopy,
  IconDiscord,
  IconDownload,
  IconDownRightArrow,
  IconEdit,
  IconExternalLink,
  IconGitHub,
  IconMessage,
  IconMoon,
  IconNextChat,
  IconOpenAI,
  IconPlus,
  IconRefresh,
  IconSeparator,
  IconShare,
  IconSidebar,
  IconSpinner,
  IconStop,
  IconSun,
  IconTelegram,
  IconTrash,
  IconTwitterX,
  IconUser,
  IconUsers,
  IconVercel,
  IconUSFlag,
  IconESFlag,
  IconCNFlag,
  IconIDFlag,
  IconVNFlag
}
