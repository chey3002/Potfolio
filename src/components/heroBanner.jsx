import React from 'react'

export default function HeroBanner() {
    return (
        <section className="bg-poligon bg-cover bg-bottom w-full">
            <article className="  mx-auto w-10/12  sm:align-bottom  py-24 sm:flex sm:h-screen sm:items-end">
                <div className=" max-w-3xl">
                    <h1 className="text-neonPink drop-shadow-neonPinkGlow text-3xl sm:text-5xl">
                        Hi, I'm <br></br>
                        <b>Carlos Valladarez</b>
                    </h1>
                    <h1 className="text-xl sm:text-3xl text-neonPink2 drop-shadow-neonPinkGlow ">
                        FrontEnd developer
                    </h1>
                    <p className="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
                        FrontEnd Developer specialized in React and Next.js with skills in JavaScript, SQL and NoSQL databases, and knowledge in Java, Python, and PHP.
                    </p>
                    <p className="mx-auto max-w-xl sm:text-xl sm:leading-relaxed">
                        Currently pursuing a degree in Software Engineering.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-start gap-4">
                        <a
                            className="flex gap-2 justify-center align-middle drop-shadow-neonPinkGlow text-center w-full rounded border border-neonPink2 px-12 py-3 text-sm font-medium text-white  ease-in-out hover:bg-neonPink2 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                            href="https://github.com/chey3002"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="pt-1 bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                            <span>Github</span>
                        </a>
                    </div>
                </div>
            </article>
        </section>
    )
}
