import React from 'react'
import { experiencia } from '../../utils/experiencia'
import Experience from './experience';

export default function ExperienceContainer() {
    return (
        <section>
            
            <div className="flex flex-wrap justify-around gap-4 ">
                <h3 className="text-neonPink2 drop-shadow-neonPinkGlow   w-fit text-xl sm:text-3xl sm:leading-relaxed">
                    Experience
                </h3>
                
            </div>
            {experiencia.map((xp,index) => {
                    return <Experience key={index} experience={xp} />;
                })}
            
        </section>)
}
