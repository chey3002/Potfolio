import React from 'react'
import { education } from '../../utils/experiencia'
import Education from './education';


export default function EducationContainer() {
    return (
        <div>
            <h2 className="text-neonPink2 drop-shadow-neonPinkGlow  w-fit sm:text-xl sm:leading-relaxed">
                Education
            </h2>
            {education.map((education, index) => {
                return <Education key={index} education={education} />;
            })}
        </div>
    )
}
