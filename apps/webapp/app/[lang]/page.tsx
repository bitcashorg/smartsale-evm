import { Upcoming } from '@/components/routes/home/upcoming'
import { projects } from '@/lib/projects'
import { getDictionary } from '../dictionaries'

export default async function IndexPage({ params: { lang } }:IndexPageProps) {
  const dict = await getDictionary(lang) 
  return (
    <div className="container !px-4 py-10 md:py-24">
      <Upcoming projects={projects} dict={dict} />
    </div>
  )
}


interface IndexPageProps {
  params: { lang: string }
}