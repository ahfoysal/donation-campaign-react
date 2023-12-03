/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        "orange-30": "rgba(248, 113, 71, 0.15)",
        "orange-40": "rgba(248, 113, 71, 0.20)",
        "orange-50": "#F87147",
        "blue-30": "rgba(0, 82, 255, 0.15)",
        "blue-40": "rgba(0, 82, 255, 0.20)",
        "blue-50": "#0052FF",
        "red-30": "rgba(255, 68, 74, 0.15)",
        "red-40": "rgba(255, 68, 74, 0.20)",
        "red-50": "#FF444A",
        "green-30": "rgba(121, 194, 63, 0.15)",
        "green-40": "rgba(121, 194, 63, 0.20)",
        "green-50": "#79C23F",
        "dark-30": "rgba(11, 11, 11, 0.50)",
        "dark-50": "rgba(11, 11, 11, 0.70)",
      },
    },
  },
  plugins: [],
};
