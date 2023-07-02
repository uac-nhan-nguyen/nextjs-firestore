/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/_components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/_views/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // https://v10.carbondesignsystem.com/guidelines/color/usage/
    colors: {
      'text-primary': 'var(--cds-text-primary)',
      'link-primary': 'var(--cds-link-primary)',
      'link-inverse': 'var(--cds-link-inverse)',
      'ui-05': 'var(--cds-ui-05)',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        'md': '40px',
      },
    },
  },
  plugins: [],
}
