import React from 'react'
import { skills } from '../../utils/experiencia'
import Tag from '../ExperienceAndEducation/tag'

export default function Project({ myProject }) {
  const mySkills = myProject.tecnologies.map(tech => {
    const skill = skills.find(skill => skill.name === tech);
    return skill || { name: tech, id: tech.replace(/\s+/g, ''), color: '#ffffff', textColor: '#000000' };
  });
  return (
    <a className='h-full block' href={myProject.url}>
      <article className='h-full flex flex-col justify-between border-2 border-neonPink2 rounded-lg p-4'>
        <header>
          <h3 className="text-neonPink drop-shadow-neonPinkGlow w-fit sm:text-xl sm:leading-relaxed">
            {myProject.name}
          </h3>
        </header>
        <hr className='sm:w-11/12 mx-auto mt-5 text-neonPink drop-shadow-neonPinkGlow' />
        <div className='flex-grow flex flex-col'>
          <div className='inline-block overflow-hidden m-2 flex-grow'>
            <img
              className='block transition-all duration-500 hover:scale-125 hover:contrast-125 w-full h-48 object-cover'
              alt={myProject.name}
              src={myProject.img}
            />
          </div>
          <p className='mt-4 text-sm sm:text-base line-clamp-3'>{myProject.description}</p>
        </div>
        <hr className='sm:w-11/12 mx-auto mt-5 text-neonPink drop-shadow-neonPinkGlow' />
        <div className='mt-4'>
          <h4 className="text-neonPink2 drop-shadow-neonPinkGlow w-fit sm:text-xl sm:leading-relaxed">
            Technologies:
          </h4>
          <div className='my-3 flex flex-wrap gap-2'>
            {mySkills.map((skill, i) => {
              return <Tag key={i} skill={skill} />;
            })}
          </div>
        </div>
      </article>
    </a>
  )
}
