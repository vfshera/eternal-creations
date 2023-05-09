/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontSize: {
        "10xl": "10rem",
      },
      textColor: {
        accent: "#9C44FC",
      },
      backgroundColor: {
        accent: "#9C44FC",
      },
      borderRadius: {
        "4xl": "3rem",
      },
      transform: {
        "center-top": "center top",
      },

      keyframes: {
        work: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - 2rem))",
          },
        },
      },
    },
  },
  plugins: [],
};
