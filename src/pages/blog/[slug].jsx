import Head from 'next/head';
import Link from 'next/link';
import NavBar from '../../components/navBar';
import { leerPost, slugsDePosts } from '../../utils/blog';
import { fechaLegible } from '../../utils/fecha';

export default function Post({ post }) {
    return (
        <>
            <Head>
                <title>{`${post.title} | Carlos Valladarez`}</title>
                <meta name="description" content={post.description} />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.description} />
            </Head>
            <NavBar />
            <main className="min-h-screen ml-20 font-sans px-6 py-16">
                <article className="post mx-auto">
                    <Link href="/blog" className="text-sm text-neonPink hover:underline">← All posts</Link>
                    <time dateTime={post.date} className="block mt-6 text-sm text-neonPink">{fechaLegible(post.date)}</time>
                    <h1 className="post-titulo">{post.title}</h1>
                    {/* El HTML sale de nuestros propios .md, convertidos al compilar (utils/blog.js). */}
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                </article>
            </main>
        </>
    );
}

export async function getStaticPaths() {
    return { paths: slugsDePosts().map((slug) => ({ params: { slug } })), fallback: false };
}

export async function getStaticProps({ params }) {
    return { props: { post: await leerPost(params.slug) } };
}
