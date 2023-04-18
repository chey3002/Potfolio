import React from 'react'
import {projects} from '../../utils/proyectos'
import Project from './project'
export default function Projects() {
  return (
      <section className=" w-full sm:h-screen flex justify-evenly flex-col " id="Projects">
          <header className="w-fit mx-auto text-neonPink2 drop-shadow-neonPinkGlow  sm:text-2xl sm:leading-relaxed">
              <h1>
                    Projects
                </h1>
        </header>
          <div className='flex flex-wrap justify-evenly'>
              {projects.map((project, i) => <Project key={i} myProject={project}></Project>)}
          </div>
    </section>
  )
}
