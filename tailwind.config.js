/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-main': '#020617',
        'bg-section': '#0F172A',
        'bg-card': '#111827',
        'bg-card-secondary': '#1E293B',
        'primary': '#2563EB',
        'primary-bright': '#3B82F6',
        'text-main': '#F8FAFC',
        'text-secondary': '#CBD5E1',
        'text-muted': '#94A3B8',
        'border-color': 'rgba(148, 163, 184, 0.18)',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #020617 0%, #0F172A 50%, #1E293B 100%)',
        'card-gradient': 'linear-gradient(145deg, #111827, #1E293B)',
        'blue-glow': 'radial-gradient(ellipse at center, rgba(37, 99, 235, 0.3) 0%, transparent 70%)',
      },
      boxShadow: {
        'glow': '0 0 40px rgba(37, 99, 235, 0.3)',
        'glow-sm': '0 0 20px rgba(59, 130, 246, 0.2)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
}
