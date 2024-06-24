const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(), // Call flowbite.content() directly within the content array
  ],
  theme: {
    extend: {
      colors: {
        "primaryGreen": "#78E602",
        "NeutreSilver": "#F5F7FA",
        "secondary": {
          100: "#E2E2D5",
          200: "#888883",
        },
      },
      boxShadow: {
        'custom-green': '1px 1px 6px #25d366',
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
