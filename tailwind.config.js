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
        },
      },
    },
  },
  corePlugins: {
    preflight: false, // Disable Tailwind's base reset
  },
  plugins: [],
};
