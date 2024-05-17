/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'main-bg': "url('main-image-bg.png')",
        'outline-bg': "url('main-image-pattern.png')",'image':"url('main-image.png')"
      },
      
    },
  },
  plugins: [],
}

