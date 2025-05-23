/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
        "./src/app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",
            white: "#ffffff",
            asideColor: "#02004b",
            neonPink: "#e600ac",
            neonPurple: "#7000a5",
            neonPink2: "#c200b6",
            neonBlue: "#06008c",
        },
        extend: {
            dropShadow: {
                React: "0px 0px 3px #00dcff",
                Nextjs: "0px 0px 3px #fff",
                Javascript: "0px 0px 3px #F0DB4F",
                Sql: "0px 0px 3px #e48e00",
                Nosql: "0px 0px 3px #84c564",
                HtmlCss: "0px 0px 3px #ed5226",
                Java: "0px 0px 3px #0674be",
                Python: "0px 0px 3px #ffd43b",
                Php: "0px 0px 3px #8694c1",
                TailwindCss: "0px 0px 3px #01b7d6",
                ReactColor: "0px 0px 3px #5c6ac4",
                HtmlToImage: "0px 0px 3px #2c3e50",
                Nodejs: "0px 0px 3px #00dcff",
                Electron: "0px 0px 3px #00dcff",
                TypeScript: "0px 0px 3px #007acc",
                Vite: "0px 0px 3px #646cff",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                poligon: "url('/img/PolygonLuminary.svg')",
            },
            fontFamily: {
                "sans": ['"Inter"',
                    'system-ui',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    '"Helvetica Neue"',
                    'Roboto',
                    '"Segoe UI"',
                    'Arial',
                    '"Noto Sans"',
                    'sans-serif',
                    '"Apple Color Emoji"',
                    '"Segoe UI Emoji"',
                    '"Segoe UI Symbol"',
                    '"Noto Color Emoji"',],
            }
        },
    },
    plugins: [],
};
