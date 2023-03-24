import React from 'react'
import { skills, Skill } from '../utils/experiencia'
import Tag from './tag';

export default function TagContainer() {
  return (
      <div className='flex sm:grid sm:grid-cols-3 sm:gap-1 sm:w-fit content-center place-items-center'>
          {skills.map((skill: Skill) => { 
              return <Tag key={skill.name} skill={skill} />;
          })}
      </div>
  )
}
