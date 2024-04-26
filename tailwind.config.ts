import type { Config } from "tailwindcss";
import tailwindColors from "tailwindcss/colors";

const colors = {
  transparent: tailwindColors.transparent,
  black: tailwindColors.black,
  white: tailwindColors.white,
  primary: '#FF9902',
  secondary: '#161D25',
  'bg-color': "#F2F2F5",
  blue: "#268697"
}

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors,
    extend: {
      keyframes: {
        animationOpacity: {
          from: {
            opacity: "0.2",
          },
          to: {
            opacity: "1",
          }
        },
        scaleIn: {
          "0%": {
            opacity: "0",
            transform: 'scale(0.9)'
          },
          "50%": {
            opacity: "0.3",
          },
          "100%": {
            opacity: "1",
            transform: 'scale(1)'
        }
      },
    },
    animation: {
      opacity: 'animationOpacity 0.5s ease-in-out',
      scaleIn: 'scaleIn 0.5s ease-in-out',
    },
    // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
  },
  plugins: [],
}
};
export default config;
