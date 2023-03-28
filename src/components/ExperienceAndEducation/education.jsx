import React from 'react'

export default function Education({education}) {
    const { carrera, institucion, fecha, location } = education;

    return (
        <>
            {education && (
                <div className='md:w-10/12 mx-auto my-3'>
                    <div className='flex justify-between drop-shadow-neonPinkGlow sm:text-lg'>
                        <span >{carrera} | {location} </span>
                        <span >{fecha}</span>

                    </div>
                    <p>{institucion}</p>
                </div>
            )}
        </>
    );
}
