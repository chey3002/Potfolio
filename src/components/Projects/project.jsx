import React from 'react'
import { skills } from '../../utils/experiencia'
import Tag from '../ExperienceAndEducation/tag'

export default function Project({ myProject }) {
  const mySkills = myProject.tecnologies.map(tech => {
    return skills.filter(skill => skill.name === tech)[0]
  })
  return (
    <a className='min-w-xs lg:max-w-md max-w-sm flex justify-center align-middle' href={myProject.url}>
      <article className=' justify-center items-center border-2 border-neonPink2 rounded-lg p-4 m-4'>
        <header>
          <h3 className="text-neonPink drop-shadow-neonPinkGlow  w-fit sm:text-xl sm:leading-relaxed">
            {myProject.name}
          </h3>
        </header>
        <hr className='sm:w-11/12 mx-auto mt-5 text-neonPink drop-shadow-neonPinkGlow' />
        <div className='inline-block overflow-hidden m-2 ' ><img className=' block transition-all duration-500 hover:scale-125 hover:contrast-125  max-h-80 ' alt={myProject.name} src={myProject.img} width='auto' height='320px'></img></div>
        <p className='lg:h-24 overflow-auto'>{myProject.description}</p>
        <hr className='sm:w-11/12 mx-auto mt-5 text-neonPink drop-shadow-neonPinkGlow' />

        <div>
          <h4 className="text-neonPink2 drop-shadow-neonPinkGlow  w-fit sm:text-xl sm:leading-relaxed">
            Technologies:
          </h4>
          <div className='my-3'>
            {mySkills.map((skill, i) => {
              return <Tag key={i} skill={skill} />;
            })}
          </div>

        </div>


      </article>
    </a>
  )
}
