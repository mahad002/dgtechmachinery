/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Arial', 'Helvetica', 'sans-serif'],
      },
      colors: {
        industrial: {
          primary: '#112A4C',    // Dark Blue
          secondary: '#D42A2A',  // Red Accent
          hover: '#145DA0',      // Blue Hover
          light: '#F5F5F5',      // Light Gray
          dark: '#E8E8E8',       // Darker Gray
          navbar: '#F8F9FA',     // Navbar background
        }
      },
    },
  },
  plugins: [],
};
