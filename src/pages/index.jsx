import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '../components/navBar';
import HeroBanner from '../components/heroBanner';
import ExperienciayEducacion from '../components/ExperienceAndEducation/experienciayEducacion';
import Head from 'next/head';
import AboutMe from '../components/aboutMe';
import ContacMe from '../components/contacMe';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <Head>
                <title>I'm Carlos Valladarez</title>
            </Head>
            <NavBar/>
            <main className="flex min-h-screen flex-col items-center justify-between ml-20 gap-5 font-sans">
                <HeroBanner/>
                <ExperienciayEducacion />
                <AboutMe />
            </main>
            <footer className="flex py-5 flex-col items-center justify-between ml-20 gap-5 font-sans">
                <ContacMe />
            </footer>
        </>
    );
}
