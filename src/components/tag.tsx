import React from 'react';
import { Skill } from '../utils/experiencia';

interface SkillTags {
    React: string;
    Nextjs: string;
    Javascript: string;
    Sql: string;
    Nosql: string;
    HtmlCss: string;
    Php: string;
    Python: string;
    Java: string;
}

const skillTags: SkillTags = {
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
export default function Tag(props: { skill: Skill }) {
    const { id, color, textColor, name } = props.skill;
    const style = {
        border: `1px solid ${color}`,
        color: "#fff",
    };

    const tagClass = ` rounded-md p-1 m-1 text-xs font-bold text-center ${skillTags[id as keyof SkillTags]}`;

    return (
        <>
            {id && (
                <span className={tagClass} style={style}>
                    {name}
                </span>
            )}
        </>
    );
};

