import React from 'react';

const shadowClasses = {
    React: 'drop-shadow-React',
    Nextjs: 'drop-shadow-Nextjs',
    Javascript: 'drop-shadow-Javascript',
    Sql: 'drop-shadow-Sql',
    Nosql: 'drop-shadow-Nosql',
    HtmlCss: 'drop-shadow-HtmlCss',
    Php: 'drop-shadow-Php',
    Python: 'drop-shadow-Python',
    Java: 'drop-shadow-Java',
    TailwindCss: 'drop-shadow-TailwindCss',
    ReactColor: 'drop-shadow-ReactColor',
    HtmlToImage: 'drop-shadow-HtmlToImage',
    Nodejs: 'drop-shadow-Nodejs',
    Electron: 'drop-shadow-Electron',
    TypeScript: 'drop-shadow-TypeScript',
    Vite: 'drop-shadow-Vite'
};

export default function Tag({ skill }) {
    const { id, name } = skill;
    const shadowClass = shadowClasses[id] || '';
    const tagClass = `rounded-md p-1 m-1 text-md text-center ${shadowClass}`;

    return (
        <>
            {id && (
                <span className={tagClass}>
                    {name}
                </span>
            )}
        </>
    );
};

