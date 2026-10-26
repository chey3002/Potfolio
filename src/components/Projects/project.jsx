import React from 'react'
import Link from 'next/link'
import { tonoDe } from '../../utils/experiencia'
import Tag from '../ExperienceAndEducation/tag'

/**
 * Una tarjeta del carrusel.
 *
 * Antes la tarjeta entera era un solo <a>, y adentro de un <a> no puede ir otro.
 * Ahora el titulo y la imagen llevan al proyecto, y si el proyecto tiene
 * `article` aparece un segundo vinculo, al articulo del blog.
 */
export default function Project({ myProject }) {
  return (
    <article className='h-full flex flex-col justify-between border-2 border-neonPink2 rounded-lg p-4'>
      <header>
        <a href={myProject.url}>
          <h3 className="text-neonPink drop-shadow-neonPinkGlow w-fit sm:text-xl sm:leading-relaxed hover:underline">
            {myProject.name}
          </h3>
        </a>
      </header>
      <hr className='sm:w-11/12 mx-auto mt-5 text-neonPink drop-shadow-neonPinkGlow' />
      <div className='flex-grow flex flex-col'>
        <a href={myProject.url} className='inline-block overflow-hidden m-2 flex-grow' tabIndex={-1} aria-hidden='true'>
          <img
            className='block transition-all duration-500 hover:scale-125 hover:contrast-125 w-full h-48 object-cover'
            alt={myProject.name}
            src={myProject.img}
          />
        </a>
        <p className='mt-4 text-sm sm:text-base line-clamp-3'>{myProject.description}</p>
      </div>
      <hr className='sm:w-11/12 mx-auto mt-5 text-neonPink drop-shadow-neonPinkGlow' />
      <div className='mt-4'>
        <h4 className="text-neonPink2 drop-shadow-neonPinkGlow w-fit sm:text-xl sm:leading-relaxed">
          Technologies:
        </h4>
        <div className='my-3 flex flex-wrap gap-2'>
          {myProject.tecnologies.map((tech) => (
            <Tag key={tech} nombre={tech} tono={tonoDe(tech)} />
          ))}
        </div>
        {myProject.article && (
          <Link
            href={myProject.article}
            className='inline-block mt-1 rounded border border-neonPink2 px-3 py-1 drop-shadow-neonPinkGlow hover:bg-neonPink2 ease-in-out'
          >
            Read the story →
          </Link>
        )}
      </div>
    </article>
  )
}
