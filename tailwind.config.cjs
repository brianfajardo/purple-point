/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ["Pacifico"],
        juliusSansOne: ["Julius Sans One"],
        playfairDisplay: ["Playfair Display"],
        sourceSansPro: ["Source Sans Pro"]
      }
    }
  },
  plugins: []
}
