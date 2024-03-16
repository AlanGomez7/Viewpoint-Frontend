/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'signinBackground': "url('./src/assets/bgSignin')"
      },
      fontFamily: {
        logoFont: ["Miltonian", "serif"]
      },
      colors: {
        bgHover: "#aaaaaa",
        mainBg: "#121212"
      }
    },
  },
  plugins: [],
}