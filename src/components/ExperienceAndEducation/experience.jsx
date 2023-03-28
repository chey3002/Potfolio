import React from 'react'

export default function Experience({experience}) {
    const { empresa,locacion,cargo,fecha,actividades} = experience;

    return (
        <>
            {experience && (
                <div className='md:w-9/12 mx-auto my-3'>
                    <div className='flex justify-between drop-shadow-neonPinkGlow sm:text-lg'>
                        <span >{empresa} | {locacion} </span>
                        <span >{fecha}</span>
                        
                    </div>
                    <p className='sm:text-lg text-neonPink font-semibold'>{cargo} </p>
                    <ul className='list-disc'>
                        {actividades.map(activity => {
                            return <li className='text-neonPurple '><p className='text-white'>{activity}</p></li>
                        })}
                    </ul>
                    <hr className='sm:w-11/12 mx-auto mt-5 text-neonPink drop-shadow-neonPinkGlow'/>
                </div>
            )}
        </>
    );
}
