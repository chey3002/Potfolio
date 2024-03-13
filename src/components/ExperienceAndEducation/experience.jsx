import React from 'react'

export default function Experience({ experience }) {
    const { empresa, locacion, cargo, fecha, actividades } = experience;

    return (
        <>
            {experience && (
                <article className='md:w-9/12 mx-auto my-3'>
                    <header className='flex justify-between drop-shadow-neonPinkGlow sm:text-lg'>
                        <h3 >{empresa} | {locacion} </h3>
                        <span >{fecha}</span>

                    </header>
                    <p className='sm:text-lg text-neonPink font-semibold'>{cargo} </p>
                    <ul className='list-disc'>
                        {actividades.map((activity, index) => {
                            return <li className='text-neonPurple ' key={index}><p className='text-white' dangerouslySetInnerHTML={{ __html: activity }} /></li>
                        })}
                    </ul>
                    <hr className='sm:w-11/12 mx-auto mt-5 text-neonPink drop-shadow-neonPinkGlow' />
                </article>
            )}
        </>
    );
}
