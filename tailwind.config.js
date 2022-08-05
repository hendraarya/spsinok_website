/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        60: "15rem",
        120: "30rem",
        125: "31.25rem",
        150: "37.5rem",
        155: "38.75rem",
        160: "40rem",
        180: "45rem",
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
};
