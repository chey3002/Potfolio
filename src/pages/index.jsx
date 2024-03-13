import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '../components/navBar';
import HeroBanner from '../components/heroBanner';
import ExperienciayEducacion from '../components/ExperienceAndEducation/experienciayEducacion';
import Head from 'next/head';
import AboutMe from '../components/aboutMe';
import ContacMe from '../components/contacMe';
import Projects from '../components/Projects/projects';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <Head>
                < title>Carlos Valladarez Portfolio</title>
                <meta
                    name="description"
                    content="FrontEnd Developer specialized in React and Next.js with skills in JavaScript, SQL and NoSQL databases, and knowledge in Java, Python, and PHP. Currently pursuing a degree in Software "
                />
                <link rel="shortcut icon" href="https://i.imgur.com/FjqhO9z.jpg" />
            </Head>
            <NavBar />
            <main className="flex min-h-screen flex-col items-center justify-between ml-20 gap-5 font-sans">
                <HeroBanner />
                <ExperienciayEducacion />
                <Projects />
                <AboutMe />
                <Analytics />
                <SpeedInsights />
            </main>
            <footer className="flex py-5 flex-col items-center justify-between ml-20 gap-5 font-sans">
                <ContacMe />
            </footer>
        </>
    );
}
