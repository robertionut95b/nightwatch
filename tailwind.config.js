module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        background: {
          light: 'var(--color-background-light)',
          DEFAULT: 'var(--color-background)',
          dark: 'var(--color-background-dark)',
        },
        backgroundSecondary: {
          DEFAULT: 'var(--color-background-secondary)',
        },
        primary: {
          DEFAULT: 'var(--color-primary)',
          hover: 'var(--color-primary-hover)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
        },
        heading: {
          light: 'var(--color-heading-light)',
          DEFAULT: 'var(--color-heading-light)',
          dark: 'var(--color-heading-dark)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
};
