import React from 'react'
import { education } from '../../utils/experiencia'
import Education from './education';


export default function EducationContainer() {
    return (
        <section>
            <h2 className="text-neonPink2 drop-shadow-neonPinkGlow  w-fit text-xl sm:text-3xl sm:leading-relaxed">
                Education
            </h2>
            {education.map((education, index) => {
                return <Education key={index} education={education} />;
            })}
        </section>
    )
}
