/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brPrimary: 'var(--color-brand-primary)',
        brSecondary: 'var(--color-brand-secondary)',
        txtTitle: 'var(--color-text-primary)',
        txtBody: 'var(--color-text-secondary)',
        bdPrimary: 'var(--color-border-primary)',
        bgPrimary: 'var(--color-background-primary)',
        bgSecondary: 'var(--color-background-secondary)',
      },
      fontFamily: {
        sans: ['Ubuntu', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
