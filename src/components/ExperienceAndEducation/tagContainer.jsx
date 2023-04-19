import React from 'react'
import { skills } from '../../utils/experiencia'
import Tag from './tag';

export default function TagContainer() {
    return (
        <section>
            <h2 className="text-neonPink2 drop-shadow-neonPinkGlow w-fit text-xl sm:text-3xl sm:leading-relaxed">
                My skills
            </h2>
            <p className='flex gap-1 w-full  md:w-10/12 sm:place-items-start flex-wrap' >
                
                {skills.map((skill) => {
                    return <Tag key={skill.name} skill={skill} />;
                })}
            </p>
        </section>
      
  )
}
