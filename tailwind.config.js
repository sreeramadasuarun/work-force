/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image":
          "url('https://wallpapers.com/images/featured/hdj6cfehppy286jt.jpg')",
        "hero-image2":
          "url('https://images.unsplash.com/photo-1597316773259-bfe49466e46c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&w=1000&q=80')",
      },
    },
  },
  plugins: [],
};
