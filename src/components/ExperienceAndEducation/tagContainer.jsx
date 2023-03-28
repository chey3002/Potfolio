import React from 'react'
import { skills } from '../../utils/experiencia'
import Tag from './tag';

export default function TagContainer() {
    return (
        <div>
            <h2 className="text-neonPink2 drop-shadow-neonPinkGlow  w-fit sm:text-xl sm:leading-relaxed">
                My skills
            </h2>
            <p className='flex  gap-1 sm:w-8/12 sm:mx-auto   sm:place-items-center flex-wrap' >
                
                {skills.map((skill) => {
                    return <Tag key={skill.name} skill={skill} />;
                })}
            </p>
        </div>
      
  )
}
