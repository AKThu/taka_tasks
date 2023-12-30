/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'my-red': '#7D0A0A',
        'my-light-red': '#BF3131',
        'my-beige': '#EAD196',
        'my-light-beige': '#F3EDC8',
        'my-dark-blue': '#161853',
        'my-blue': '#292C6D',
        'my-light-pink': '#FAEDF0',
        'my-pink': '#EC255A',
      }
    },
  },
  plugins: [],
}
