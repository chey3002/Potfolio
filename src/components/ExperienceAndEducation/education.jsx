import React from 'react'

export default function Education({education}) {
    const { carrera, institucion, fecha, location } = education;

    return (
        <>
            {education && (
                <article className='md:w-10/12 mx-auto my-3'>
                    <header className='flex justify-between drop-shadow-neonPinkGlow sm:text-lg'>
                        <h3 >{carrera} | {location} </h3>
                        <span >{fecha}</span>

                    </header>
                    <p>{institucion}</p>
                </article>
            )}
        </>
    );
}
