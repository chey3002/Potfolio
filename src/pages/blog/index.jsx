import Head from 'next/head';
import Link from 'next/link';
import NavBar from '../../components/navBar';
import { listarPosts } from '../../utils/blog';
import { fechaLegible } from '../../utils/fecha';

export default function Blog({ posts }) {
    return (
        <>
            <Head>
                <title>Blog | Carlos Valladarez</title>
                <meta name="description" content="Notes and long-form write-ups about the projects I build." />
            </Head>
            <NavBar />
            <main className="min-h-screen ml-20 font-sans px-6 py-16">
                <section className="mx-auto max-w-3xl">
                    <h1 className="text-neonPink2 drop-shadow-neonPinkGlow text-3xl sm:text-5xl">Blog</h1>
                    <p className="mt-3 sm:text-lg">Long-form write-ups about the projects I build: what I planned, what failed, and what worked.</p>
                    <ul className="mt-10 flex flex-col gap-6">
                        {posts.map((p) => (
                            <li key={p.slug}>
                                <Link href={`/blog/${p.slug}`} className="block border-2 border-neonPink2 rounded-lg p-5 hover:bg-neonBlue ease-in-out">
                                    <time dateTime={p.date} className="text-sm text-neonPink">{fechaLegible(p.date)}</time>
                                    <h2 className="mt-1 text-xl sm:text-2xl font-semibold">{p.title}</h2>
                                    <p className="mt-2">{p.description}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </>
    );
}

export async function getStaticProps() {
    return { props: { posts: listarPosts() } };
}
