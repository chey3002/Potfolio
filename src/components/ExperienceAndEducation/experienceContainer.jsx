import React from 'react'
import { experiencia } from '../../utils/experiencia'
import Experience from './experience';

export default function ExperienceContainer() {
    return (
        <div>
            <h2 className="text-neonPink2 drop-shadow-neonPinkGlow  w-fit sm:text-xl sm:leading-relaxed">
                Experience
            </h2>
            
            {experiencia.map((xp,index) => {
                    return <Experience key={index} experience={xp} />;
                })}
            
        </div>)
}
