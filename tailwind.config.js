/** @type {import('tailwindcss').Config} */
export const content = ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}']
export const theme = {
  fontFamily: {
    display: ['Poppins'],
    body: ['"Open Sans"']
  },
  screen: {
    sm: '640px',
    // => @media (min-width: 640px) { ... }

    md: '768px',
    // => @media (min-width: 768px) { ... }

    lg: '1024px',
    // => @media (min-width: 1024px) { ... }

    xl: '1280px',
    // => @media (min-width: 1280px) { ... }

    '2xl': '1536px'
  },

  extend: {}
}
export const plugins = []
