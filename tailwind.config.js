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
                // El brillo blanco de la foto de «About Me».
                Nextjs: "0px 0px 3px #fff",
                // Un brillo por grupo de habilidades (tag.jsx).
                tonoAi: "0px 0px 3px #e600ac",
                tonoLenguajes: "0px 0px 3px #F0DB4F",
                tonoFrontend: "0px 0px 3px #00dcff",
                tonoBackend: "0px 0px 3px #84c564",
                tonoDatos: "0px 0px 3px #e48e00",
                tonoCloud: "0px 0px 3px #646cff",
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
