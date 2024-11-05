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
        primaryBg: "#000000",
        accent1: "#8c30e3",
        accent2: "#7564ef",
        cardbg: "#212121"
      },
    },
  },
  plugins: [],
};
export default config;
