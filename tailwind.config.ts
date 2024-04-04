import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: ['class'],
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1280px'
            }
        },
        screens: {
            xs: '378px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px'
        },
        extend: {
            colors: {
                white: '#ffffff',
                gray: {
                    50: '#F5F5F5',
                    100: '#EEEEEE',
                    300: '#F0F0F0',
                    500: '#989898',
                    800: '#222222',
                    900: '#111111'
                }
            },
            fontFamily: {
                nunito: ['var(--font-nunito-sans)'],
                rubik: ['var(--font-rubik-sans)']
            },
            boxShadow: {
                base: '0px 24px 60px 0px rgba(21, 24, 38, 0.15)'
            }
        }
    },
    plugins: [require('autoprefixer')]
};
export default config;
