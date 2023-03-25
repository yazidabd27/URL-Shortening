/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      colors:{
        cyan:'hsl(180, 66%, 49%)',
        DV:'hsl(257, 27%, 26%)',
        Rd:'hsl(0, 87%, 67%)',
        Gr:'hsl(0, 0%, 75%)',
        GV:'hsl(257, 7%, 63%)',
        VDB:'hsl(255, 11%, 22%)',
        VDV:'hsl(260, 8%, 14%)',
        unknown:'#F0F1F6',
        HC:'#9DE1E0',
      }
    },
  },
  plugins: [],
}
