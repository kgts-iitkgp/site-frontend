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
        primaryBg: "var(--primaryBg)",
        accent1: "var(--accent1)",
        accent2: "var(--accent2)",
        transBack: "var(--transBack)",
      },
      // fontFamily: {
      //   Gmvf: ['GeistMonoVF', 'sans-serif'], 
      //   Gvf: ['GeistVF', 'sans-serif'], 
      // },
    },
  },
  plugins: [],
};
export default config;
