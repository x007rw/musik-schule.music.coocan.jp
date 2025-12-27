/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: '#990000',
                secondary: '#008040',
                accent: '#cc4200',
                surface: '#f5f5f5',
            },
            fontFamily: {
                sans: ['"M PLUS Rounded 1c"', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
