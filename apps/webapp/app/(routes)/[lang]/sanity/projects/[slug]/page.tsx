import type { Metadata, ResolvingMetadata } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { toPlainText } from 'next-sanity'

import { ProjectPage } from '@/components/sanity/pages/project/ProjectPage'
import { urlForOpenGraphImage } from '@/services/sanity/lib/utils'
import { generateStaticSlugs } from '@/services/sanity/loader/generateStaticSlugs'
import { loadProject } from '@/services/sanity/loader/loadQuery'
const ProjectPreview = dynamic(
  () => import('@/components/sanity/pages/project/ProjectPreview')
)

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { data: project } = await loadProject(params.slug)
  const ogImage = urlForOpenGraphImage(project?.coverImage)

  return {
    title: project?.title,
    description: project?.overview
      ? toPlainText(project.overview)
      : (await parent).description,
    openGraph: ogImage
      ? {
          images: [ogImage, ...((await parent).openGraph?.images || [])]
        }
      : {}
  }
}

export function generateStaticParams() {
  return generateStaticSlugs('project')
}

export default async function ProjectSlugRoute({ params }: Props) {
  const initial = await loadProject(params.slug)

  if (draftMode().isEnabled) {
    return <ProjectPreview params={params} initial={initial} />
  }

  if (!initial.data) {
    notFound()
  }

  return <ProjectPage data={initial.data} />
}
