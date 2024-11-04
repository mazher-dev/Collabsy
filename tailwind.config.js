export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          600: '#5e2bff',  // Custom purple color
          700: "#ffffff"
        },
      },
    },
  },
  corePlugins: {
    preflight: false, // Disable Tailwind's base reset
  },
  plugins: [],
};
