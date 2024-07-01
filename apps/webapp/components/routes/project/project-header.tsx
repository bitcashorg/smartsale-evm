import Image from 'next/image'
import { Project } from '@/lib/projects'
import { ReactNode } from 'react'
import { ProjectPills } from './project-pills'
import { appConfig } from '@/lib/config'

export function ProjectHeader({
  project,
  children
}: {
  project: Project
  children: ReactNode
}) {
  return (
    <header className="flex size-full justify-center md:mb-0 md:min-h-[95vh]">
      <div className="h-fit !py-0 md:static md:h-auto md:!pt-[6rem]">
        <Image
          alt={project.title}
          className="pointer-events-none absolute inset-0 size-[95vh] object-cover opacity-50"
          src={project.heroImage}
          fill
          priority
        />
      </div>
      {/* <ProjectDataCard project={project} /> */}
      <section className="container z-10 flex flex-col items-center pt-10 align-center">
        <h1 className="flex flex-col p-10 mx-auto text-center whitespace-pre-line align-center md:mb-10">
          <sub className="w-full h-8 mb-16 text-xl font-semibold drop-shadow-md md:mb-0 md:h-10 md:text-2xl">
            {project.pitch}
          </sub>
          <span
            className="w-full text-5xl font-normal leading-16 drop-shadow-md sm:text-6xl md:text-7xl lg:text-8xl"
            key="upcoming-auctions-title"
          >
            {project.title.toUpperCase()}
          </span>
        </h1>

        {appConfig.features.presale ? <ProjectPills project={project} /> : null}

        {children}
      </section>
    </header>
  )
}
