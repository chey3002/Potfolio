// Los posts del blog: archivos Markdown en content/blog, con frontmatter
// (title, description, date). Se convierten a HTML al compilar el sitio
// (getStaticProps), asi que nada de esto llega al navegador.
//
// Las imagenes de un post van en public/blog/<slug>/, y en el Markdown se
// escriben con la ruta relativa de su repo de origen (graficos/..., imagenes/...):
// `rutasDeImagenes` las reescribe. Asi un post se copia tal cual.

import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import { visit } from 'unist-util-visit';

const DIR_POSTS = path.join(process.cwd(), 'content', 'blog');

/** La fecha del frontmatter como 'YYYY-MM-DD' (gray-matter la entrega como Date). */
function fechaIso(fecha) {
    if (fecha instanceof Date) return fecha.toISOString().slice(0, 10);
    return String(fecha ?? '');
}

function slugs() {
    if (!fs.existsSync(DIR_POSTS)) return [];
    return fs.readdirSync(DIR_POSTS).filter((f) => f.endsWith('.md')).map((f) => f.replace(/\.md$/, ''));
}

function leerArchivo(slug) {
    const crudo = fs.readFileSync(path.join(DIR_POSTS, `${slug}.md`), 'utf8');
    const { data, content } = matter(crudo);
    return {
        meta: {
            slug,
            title: data.title ?? slug,
            description: data.description ?? '',
            date: fechaIso(data.date),
        },
        content,
    };
}

/** Todos los posts, del mas nuevo al mas viejo, sin el cuerpo. */
export function listarPosts() {
    return slugs()
        .map((s) => leerArchivo(s).meta)
        .sort((a, b) => b.date.localeCompare(a.date));
}

export function slugsDePosts() {
    return slugs();
}

/** Las imagenes con ruta relativa pasan a /blog/<slug>/<ruta>. */
function rutasDeImagenes(slug) {
    return () => (arbol) => {
        visit(arbol, 'image', (nodo) => {
            if (!/^([a-z]+:|\/)/i.test(nodo.url)) nodo.url = `/blog/${slug}/${nodo.url}`;
        });
    };
}

/** Saca el primer titulo de nivel 1: la pagina ya lo muestra desde el frontmatter. */
function sinTituloRepetido() {
    return (arbol) => {
        const i = arbol.children.findIndex((n) => n.type === 'heading' && n.depth === 1);
        if (i !== -1) arbol.children.splice(i, 1);
    };
}

/** Un post: sus datos y el cuerpo en HTML. */
export async function leerPost(slug) {
    const { meta, content } = leerArchivo(slug);
    const html = await unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(sinTituloRepetido)
        .use(rutasDeImagenes(slug))
        .use(remarkRehype)
        .use(rehypeSlug)
        .use(rehypeStringify)
        .process(content);
    return { ...meta, html: String(html) };
}
