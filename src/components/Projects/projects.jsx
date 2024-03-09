import React from 'react'
import { projects } from '../../utils/proyectos'
import Project from './project'
export default function Projects() {
  return (
    <section className=" w-full h-full sm:h-max flex justify-evenly flex-col  m-auto" id="Projects">
      <header className="w-fit mx-auto text-neonPink2 drop-shadow-neonPinkGlow text-3xl sm:text-5xl sm:leading-relaxed">
        <h2>
          Projects
        </h2>
      </header>
      <div className='flex flex-wrap justify-evenly'>
        {projects.map((project, i) => <Project key={i} myProject={project}></Project>)}
      </div>
    </section>
  )
}
