import React from 'react';

const skillTags = {
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
};
export default function Tag({ skill}) {
    const { id, name } = skill;
    const tagClass = `rounded-md p-1 m-1 text-md  text-center drop-shadow-${id}`;

    return (
        <>
            {id && (
                <span className={tagClass} >
                    {name}
                </span>
            )}
        </>
    );
};

