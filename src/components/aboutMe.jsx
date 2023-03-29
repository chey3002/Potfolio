import React from 'react'

export default function AboutMe() {
    return (
        <section className=" w-full sm:h-screen sm:grid sm:place-content-center" id="About">
            <header className="w-fit mx-auto text-neonPink2 drop-shadow-neonPinkGlow  sm:text-2xl sm:leading-relaxed">
                <h1>
                    About Me
                </h1>
            </header>
            <article className="w-11/12 mx-auto md:grid md:grid-cols-2 mt-5">
                    <div className='flex flex-col gap-2 max-w-[70ch] m-auto'>
                        <p>Hi! I'm Carlos Valladarez, a web developer focused on the frontend, but with experience in the backend as well. Since I was a teenager I've loved programming, and I found web development a more visual and entertaining way to bring ideas to life.
                        </p>
                        <p>I started my career in web development a couple years ago, working in startups and companies. One of my favorite projects has been with Kodeliv, a startup among friends where we learned a lot about web development, especially React and Next.js, becoming my favorite framework.
                        </p>
                        <p>I consider myself a problem solver and I'm always looking for creative and efficient ways to solve the challenges that arise. In addition, I keep up to date on the latest trends and technologies in web development via Twitter, YouTube and Twitch.
                        </p>
                        <p>I believe we are in an exciting time in the software industry in general, and in web development in particular. I would love to continue learning and contributing to this industry, adapting to the changes ahead and doing my bit in interesting and challenging projects.
                        </p>
                        <p>If you need an enthusiastic and committed web developer for your next project, don't hesitate to contact me - I look forward to working with you!
                        </p>
                    </div>
                    <div className='md:grid place-content-center hidden'>
                        <img className='drop-shadow-neonPinkGlow h-auto w-full max-w-xs' src="/img/punpun2.png" alt="avatar" />
                    </div>
            </article>
        </section>
    )
}
