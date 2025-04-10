/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // sizes: {
      //   contactSize: 'clamp(0.8vw, 5vw, 0.6vw)'
      // },

      boxShadow: {
        'inset-top': 'inset 0 70px 150px rgba(0, 0, 0, 0.8)',
      },

      fontFamily: {
        Ade: ["Ade"],
        Agnes: ["Agnes"],
        Balfira: ["Balfira"],
        DhynaBold: ["DhynaBold"],
        Dhyna: ["Dhyna"],
        HelveticaNeue: ["HelveticaNeue"],
        Kirgina: ["Kirgina"],
        Estonia: ["Estonia"],
        CT: ["Castoro Titling"],
        HelveticaNeueM: ["HelveticaNeueM"],
        HelveticaNeueL: ["HelveticaNeueL"],
        Radikal: ["Radikal"],
        RadikalB: ["RadikalB"],
        SlickyBohem : ["SlickyBohem"],
        StrawfordI: ["StrawfordI"],
        Strawford: ["Strawford"],
      },

      colors: {
        black: '#000',
        blackBackground: '#090a09',
        white: '#FFF',
        grey: '#c5c5c5',
        myGreen: '#32804c',
        myGreenHover: '#2f6742',


        gaiaGreen: '#6E9B42',
        gaiaWhite: '#F2F2F2',
        gaiaBeige: '#C0B4A4',


        ohPink: '#c60063',
        ohGreen: '#E3EBCA',
        ohYellow: '#FDED00',
        ohGrey: '#6A6A6A',

        obsPink: '#DA7171',
      }
    },
  },
  plugins: [],
}

