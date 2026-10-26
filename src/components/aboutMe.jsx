import React from 'react'

export default function AboutMe() {
    return (
        <section className=" w-full sm:h-max flex flex-col content-evenly sm:place-content-center" id="About">
            <header className="w-fit mx-auto text-neonPink2 drop-shadow-neonPinkGlow text-3xl  sm:text-5xl sm:leading-relaxed">
                <h2>
                    About Me
                </h2>
            </header>
            <article className=" mx-auto md:grid md:grid-cols-2 mt-5">
                <div className='flex flex-col gap-2 max-w-[70ch] m-auto'>
                    <p>Hey! I&apos;m Carlos Valladarez, a software engineer from Cuenca, Ecuador. I&apos;ve loved programming since I was a teenager, and for more than 4 years I&apos;ve been building full-stack systems, from React and Next.js interfaces to Java, Python and Spring Boot backends.
                    </p>
                    <p>I started in web development at Kodeliv, a startup among friends where React and Next.js became my favorite tools. Since then I&apos;ve worked on payment gateways, banking software, a patient-management tool for a clinical research unit, and enterprise applications with a design system that cut time-to-market by 40%.
                    </p>
                    <p>Today I work at Ensolvers, building AI-powered platforms: agentic workflows with LangGraph, RAG pipelines on top of vector databases, and the observability that keeps LLMs honest in production. I recently defended my thesis for a Master&apos;s in Artificial Intelligence, focused on RAG and generative AI workflows.
                    </p>
                    <p>I like owning problems end to end, especially the ambiguous ones, and measuring whether a solution actually works. In my free time I build things like PAB, a Chrome extension that suggests the best move in Pokémon battles, backed by a neural network I trained.
                    </p>
                    <p>I speak Spanish natively and English at an advanced level. If you have an interesting project in mind, don&apos;t hesitate to contact me. I&apos;d love to hear about it!
                    </p>
                </div>
                <div className='md:grid place-content-center hidden'>
                    <img className='drop-shadow-Nextjs h-auto w-full max-w-md' src="/img/avatar.png" alt="avatar" width="auto" height="auto" />
                </div>
            </article>
        </section>
    )
}
