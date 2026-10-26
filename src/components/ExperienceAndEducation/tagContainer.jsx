import React from 'react'
import { skillGroups } from '../../utils/experiencia'
import Tag from './tag';

export default function TagContainer() {
    return (
        <section>
            <h2 className="text-neonPink2 drop-shadow-neonPinkGlow w-fit text-xl sm:text-3xl sm:leading-relaxed">
                My skills
            </h2>
            <div className='flex flex-col gap-3 w-full md:w-10/12 mt-2'>
                {skillGroups.map((grupo) => (
                    <div key={grupo.categoria}>
                        <h3 className='text-neonPink font-semibold sm:text-lg'>{grupo.categoria}</h3>
                        <div className='flex flex-wrap gap-1'>
                            {grupo.items.map((item) => (
                                <Tag key={item} nombre={item} tono={grupo.tono} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
