/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        dark: ' rgba(9, 13, 31, 1)',
        lightText: 'rgba(102, 112, 133, 1)',
        darkText: 'rgba(26, 26, 26, 1)',
        purpleText : 'rgba(105, 65, 198, 1)',
        greenText : 'rgba(2, 106, 162, 1)',
        greenTextTwo : 'rgba(2, 122, 72, 1)',
        lightBlueText : 'rgba(53, 56, 205, 1)',
        lightBlueTextTwo : 'rgba(54, 63, 114, 1)',
        lightBlueTextThree : 'rgba(54, 63, 114, 1)',
        lightRedText : 'rgba(193, 21, 116, 1)',
        lightOrangeText : 'rgba(196, 50, 10, 1)',
        lightPinkText : 'rgba(193, 21, 116, 1)',
        lightPinkTextTwo : 'rgba(193, 21, 116, 1)',
        /* BACKGROUNDS */
        Purple :  'rgba(249, 245, 255, 1)',
        purpleTwo :  'rgba(127, 86, 217, 1)',
        LightBlue : ' rgba(238, 244, 255, 1)',
        LightBlueTwo : ' rgba(248, 249, 252, 1)',
        LightRed : 'rgba(253, 242, 250, 1)',
        lightGreen : 'rgba(240, 249, 255, 1)',
        lightGreenTwo : 'rgba(236, 253, 243, 1)',
        lightOrange : 'rgba(255, 246, 237, 1)',
        lightPink : 'rgba(253, 242, 250, 1)',
        lightPinkTwo : 'rgba(255, 241, 243, 1)',

        
      },
      fontSize: {
        '100': '100%', 
      },
    },
  },
  plugins: [],
}
