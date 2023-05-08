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
      // screens: {
      //   sm: { min: "640px", max: "767px" },
      //   // => @media (min-width: 640px and max-width: 767px) { ... }

      //   md: { min: "768px", max: "1023px" },
      //   // => @media (min-width: 768px and max-width: 1023px) { ... }

      //   lg: { min: "1024px", max: "1279px" },
      //   // => @media (min-width: 1024px and max-width: 1279px) { ... }

      //   xl: { min: "1280px", max: "1535px" },
      //   // => @media (min-width: 1280px and max-width: 1535px) { ... }

      //   "2xl": { min: "1536px" },
      //   // => @media (min-width: 1536px) { ... }
      // },
    },
  },
  plugins: [],
};
