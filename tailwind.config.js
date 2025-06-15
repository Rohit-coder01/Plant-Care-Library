/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        forest: {
          50: '#f7fdf7',
          100: '#eefbef',
          200: '#d5f5d8',
          300: '#aeeab4',
          400: '#7dd388',
          500: '#54b865',
          600: '#3f9850',
          700: '#347a42',
          800: '#2d6137',
          900: '#2D5016',
        },
        sage: {
          50: '#f8faf8',
          100: '#f1f5f1',
          200: '#e3ebe3',
          300: '#cfdacf',
          400: '#b4c5b4',
          500: '#8FBC8F',
          600: '#759575',
          700: '#5f7a5f',
          800: '#4e634e',
          900: '#415341',
        },
        terracotta: {
          50: '#fef7f4',
          100: '#fdede7',
          200: '#fbd8ce',
          300: '#f7b8a8',
          400: '#f19077',
          500: '#E07A5F',
          600: '#d35a3a',
          700: '#b2472b',
          800: '#943c26',
          900: '#7a3424',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 20px rgba(46, 160, 67, 0.3)',
      },
    },
  },
  plugins: [],
};