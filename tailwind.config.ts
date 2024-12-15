import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@shadcn/ui/dist/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#00BFFF",
        secondary: "#00BFFF",
        tertiary: '#c4e1f6',
      },
      boxShadow: {
        glow: 'inset 0 0 20px #D4F6FF, inset 0 0 15px #D4F6FF, inset 0 0 40px #D4F6FF',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-5px)' },
        },
      },
      animation: {
        wiggle: 'wiggle 0.5s ease-in-out',
      },
    },
    fontFamily : {
      com : ['Edu AU VIC WA NT PreM'],
      description : ['Merienda'],
      title : ['Bungee Shade']

    },
    letterSpacing : {
      space : '0.35em',
    },
    lineHeight : {
      '2.9' : '2.9em',
    },
  },
  plugins: [
    addVariablesForColors,
    require('tailwindcss-textshadow'),
    addVariablesForColors,
  ],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}

export default config;