import React from 'react'
import EducationContainer from './educationContainer';
import ExperienceContainer from './experienceContainer';
import TagContainer from './tagContainer'

export default function ExperienciayEducacion() {
    return (
        <section className=" w-full h-fit lg:h-screen sm:grid sm:place-content-center flex flex-col sm:content-evenly" id="Experience">
            <header className="w-fit mx-auto text-neonPink2 drop-shadow-neonPinkGlow text-3xl  sm:text-5xl sm:leading-relaxed">
                <h2>
                    Experience and Education
                </h2>
            </header>   
            <div className="w-11/12 mx-auto flex flex-col content-around">
                <ExperienceContainer/>
                <div className="sm:grid sm:grid-cols-2 sm:gap-5">
                    <EducationContainer />
                    <TagContainer />
                </div>
            </div>
        </section>
    );
}
