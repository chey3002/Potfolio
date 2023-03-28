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
};
export default function Tag({ skill}) {
    const { id, color, textColor, name } = skill;
    const tagClass = `rounded-md p-1 m-1 text-md  text-center ${skillTags[id]}`;

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

