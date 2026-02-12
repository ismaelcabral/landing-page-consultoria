/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Premium Tech Palette
                'neon-red': {
                    DEFAULT: '#FF3333', // Impactful Neon Red for CTAs
                    400: '#FF6666',
                    500: '#FF3333',
                    600: '#CC0000',
                },
                'subtle-purple': {
                    DEFAULT: '#A390E4', // Subtle tech purple
                    500: '#A390E4',
                    900: '#1A1429', // Very dark purple background hint
                },
                'rich-black': '#050505', // Black Matte
                'deep-grey': '#121212', // Charcoal/Deep Graphite
                neutral: {
                    850: '#1a1a1a',
                    900: '#171717',
                    950: '#0a0a0a',
                },
            },
            fontFamily: {
                sans: ['Inter', 'Montserrat', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
