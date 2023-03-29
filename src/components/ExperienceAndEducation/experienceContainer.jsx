import React from 'react'
import { experiencia } from '../../utils/experiencia'
import Experience from './experience';

export default function ExperienceContainer() {
    return (
        <section>
            
            <div className="mt-8 flex flex-wrap justify-around gap-4 ">
                <h2 className="text-neonPink2 drop-shadow-neonPinkGlow  w-fit sm:text-xl sm:leading-relaxed">
                    Experience
                </h2>
                <a
                    className="flex gap-2 justify-center align-middle drop-shadow-neonPinkGlow text-center w-fit rounded border border-neonPink2 bg-neonPurple px-1 py-1 text-sm font-medium text-white  ease-in-out hover:bg-neonPink hover:border-neonPink focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                    href="/CV/CarlosValladarerzCVEn.pdf"
                >
                    <span>Download CV</span>
                </a>
            </div>
            {experiencia.map((xp,index) => {
                    return <Experience key={index} experience={xp} />;
                })}
            
        </section>)
}
