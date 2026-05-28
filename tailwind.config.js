export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 20px 60px rgba(255, 210, 190, 0.15)',
        soft: '0 18px 80px rgba(30, 20, 20, 0.08)',
      },
      colors: {
        toast: '#F7ECE1',
        blush: '#E8BBB5',
        sage: '#B9C6A8',
        cream: '#FFF2E7',
        mocha: '#4B3621',
        amber: '#F4A261',
        petal: '#F2D1C9',
        twilight: '#37323E'
      },
      backgroundImage: {
        'cozy-gradient': 'radial-gradient(circle at top right, rgba(255, 215, 175, 0.35), transparent 38%), linear-gradient(180deg, #FDF6EE 0%, #F6ECE7 100%)',
        'glass-gradient': 'linear-gradient(180deg, rgba(255,255,255,0.22), rgba(255,255,255,0.10))'
      }
    }
  },
  plugins: [],
};
