import React from 'react'
import EducationContainer from './educationContainer';
import ExperienceContainer from './experienceContainer';
import TagContainer from './tagContainer'

export default function ExperienciayEducacion() {
    return (
        <section className=" w-full lg:h-screen sm:grid sm:place-content-center sm:content-around" id="Experience">
            <header className="w-fit mx-auto text-neonPink2 drop-shadow-neonPinkGlow  sm:text-2xl sm:leading-relaxed">
                <h1>
                    Experience and Education
                </h1>
            </header>   
            <div className="w-10/12 mx-auto content-around">
                <ExperienceContainer/>
                <div className="sm:grid sm:grid-cols-2 mt-5">
                    <EducationContainer />
                    <TagContainer />
                </div>
            </div>
        </section>
    );
}
