import React from 'react'
import Github from './icons/github'

export default function HeroBanner() {
    return (
        <section className="bg-poligon bg-cover bg-bottom w-full">
            <article className="  mx-auto w-10/12  sm:align-bottom  py-24 sm:flex sm:h-screen sm:items-center">
                <div className=" max-w-3xl">
                    <h1 className="text-neonPink drop-shadow-neonPinkGlow text-5xl sm:text-7xl">
                        <b>Carlos Valladarez</b>
                    </h1>
                    <h1 className="text-3xl sm:text-5xl text-neonPink2 drop-shadow-neonPinkGlow ">
                        FrontEnd developer
                    </h1>
                    <p className="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
                        Specialized in React and Next.js with skills in JavaScript, SQL and NoSQL databases, and knowledge in Java, Python, and PHP.
                    </p>
                    <p className="mx-auto max-w-xl sm:text-xl sm:leading-relaxed">
                        Currently pursuing a degree in Software Engineering.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-start gap-4">
                        <a
                            className="flex gap-2 sm:w-56 w-full justify-center align-middle  drop-shadow-neonPinkGlow text-center  rounded border border-neonPink2 px-12 py-3 text-xl font-medium text-white  ease-in-out hover:bg-neonPink2 focus:outline-none focus:ring active:bg-blue-500 "
                            href="https://github.com/chey3002"
                        >
                            <Github/>
                            <span>Github</span>
                        </a>
                        <a
                    className="flex gap-2 justify-center w-full sm:w-56 align-middle drop-shadow-neonPinkGlow text-center  rounded border border-neonPink px-12 py-3 text-xl font-medium text-white  ease-in-out hover:bg-neonPink hover:border-neonPink focus:outline-none focus:ring active:bg-blue-500 "
                    href="/CV/CarlosValladarerzCVEn.pdf"
                        >
                            
                    <span className=''>Download CV</span>
                </a>
                    </div>
                </div>
            </article>
        </section>
    )
}
