import { COLORS } from './src/constants/colors';
import { platformSelect} from 'nativewind/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./App.tsx", 
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/navigations/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  darkMode: 'class',
  theme: {
    extend: {
      colors:COLORS,
      fontFamily:{
        poppinsThin: ['Poppins_100Thin'],
        poppinsExtraLight: ['Poppins_200ExtraLight'],
        poppinsLight: ['Poppins_300Light'],
        poppins: ['Poppins_400Regular'], // Regular
        poppinsMedium: ['Poppins_500Medium'],
        poppinsSemiBold: ['Poppins_600SemiBold'],
        poppinsBold: ['Poppins_700Bold'],
        poppinsExtraBold: ['Poppins_800ExtraBold'],
        poppinsBlack: ['Poppins_900Black'],
        system:platformSelect({
          ios:'',
          android:'',
          default:''
        })
      },
      screens: {
          xxs: '320px',
          xs: '375px',
          sm: '425px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          xxl: '1440px'
      },
    },
  },
  plugins: [],
}