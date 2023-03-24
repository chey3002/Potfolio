import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '@/components/navBar';
import HeroBanner from '@/components/heroBanner';
import ExperienciayEducacion from '@/components/experienciayEducacion';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <NavBar/>
            <main className="flex min-h-screen flex-col items-center justify-between ml-20">
                <HeroBanner/>
                <ExperienciayEducacion/>
            </main>
        </>
    );
}
