import { getDictionary } from '@/dictionaries'
import { Lang } from '@/dictionaries/locales'
import { getProjectBySlug } from '@/lib/projects'
import { Metadata } from 'next'

export default function ProjectPagesLayout({ children }: ProjectPageProps) {
  return children
}

export async function generateMetadata({
  params
}: ProjectPageProps): Promise<Metadata> {
  const dict = await getDictionary(params.lang)
  const project = await getProjectBySlug(params.project, dict)

  return {
    title: project?.title,
    openGraph: {
      images: [project?.heroImage || '']
    }
  }
}
interface ProjectPageProps {
  children: React.ReactNode
  params: ProjectPageParams
}
type ProjectPageParams = { project: string; lang: Lang }
