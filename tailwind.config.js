module.exports = {
  purge: ['./src/**/*.{html,js}'],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
        light: {
          background: '#F3F4F6', // Very light gray
          primary: '#3B82F6', // Pleasant blue
          secondary: '#2563EB', // Darker blue
          text: '#111827', // Dark black for text
        },
        dark: {
          background: '#1F2937', // Dark gray
          primary: '#60A5FA', // Light blue
          secondary: '#3B82F6', // Pleasant blue
          text: '#F9FAFB', // White for text
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
