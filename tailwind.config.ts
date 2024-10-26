import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryColor : "#8c30e3",
        secondaryColor : '#7564ef',
        backColor : '#343a40'
      },
      textShadow: {
        glow: '0 0 5px #7564ef, 0 0 10px #7564ef, 0 0 15px #7564ef, 0 0 20px #7564ef',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-5px)' },
        },
      },
      animation: {
        wiggle: 'wiggle 0.5s ease-in-out ',
      },
    },
    fontFamily : {
      com : ['var(--font-com)','Rubik Wet Paint'],
    },
    letterSpacing : {
      space : '0.35em',
    },
    lineHeight : {
      '2.9' : '2.9em',
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
};
export default config;
