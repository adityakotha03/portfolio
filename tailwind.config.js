/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      typography: {
        lg: {
          css: {
            h1: {
              fontWeight: '300',
              letterSpacing: '-0.025em',
            },
            h2: {
              fontSize: '1.5rem',
              fontWeight: '300',
              marginBottom: '1rem',
              borderBottom: '1px solid #e5e7eb',
              paddingBottom: '0.5rem',
            },
            h3: {
              fontSize: '1.25rem',
              fontWeight: '500',
              marginBottom: '0.75rem',
            },
            strong: {
              fontWeight: '600',
              color: '#111827',
            },
          },
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif'
        ],
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'Consolas',
          'monospace'
        ],
      },
      boxShadow: {
        project: `
          0 2px 12px rgba(0, 0, 0, 0.02),
          0 4px 8px rgba(0, 0, 0, 0.03),
          0 2px 4px rgba(0, 0, 0, 0.04),
          0 1px 2px rgba(0, 0, 0, 0.05),
          0 1px rgba(0, 0, 0, 0.06),
          0 0 0 8px rgba(0, 0, 0, 0.02),
          0 24px 48px rgba(0, 0, 0, 0.08)
        `,
        card: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
      },
    },
  },
  plugins: [],
};
