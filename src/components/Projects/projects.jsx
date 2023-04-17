import React from 'react'
import {projects} from '../../utils/proyectos'
import Project from './project'
export default function Projects() {
  return (
      <section className=" w-full sm:h-screen sm:grid sm:place-content-center " id="Projects">
          <header className="w-fit mx-auto text-neonPink2 drop-shadow-neonPinkGlow  sm:text-2xl sm:leading-relaxed">
              <h1>
                    Projects
                </h1>
        </header>
          <div className='grid place-content-center grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-2 w-full'>
              {projects.map((project, i) => <Project key={i} myProject={project}></Project>)}
          </div>
    </section>
  )
}
