import React from 'react';

/**
 * Un brillo por grupo de habilidades (ver `skillGroups` en utils/experiencia.js).
 * Los nombres de clase van completos, no armados con `${tono}`: Tailwind solo
 * genera las clases que encuentra escritas en el codigo.
 */
const brilloPorTono = {
    ai: 'drop-shadow-tonoAi',
    lenguajes: 'drop-shadow-tonoLenguajes',
    frontend: 'drop-shadow-tonoFrontend',
    backend: 'drop-shadow-tonoBackend',
    datos: 'drop-shadow-tonoDatos',
    cloud: 'drop-shadow-tonoCloud',
};

export default function Tag({ nombre, tono }) {
    const brillo = brilloPorTono[tono] ?? '';
    return (
        <span className={`rounded-md p-1 m-1 text-base text-center ${brillo}`}>
            {nombre}
        </span>
    );
}
