import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
   theme: {
    extend: {
      // colors: {
      //   primaryBg: "#000000",
      //   accent1: "#00ffff",
      //   accent2: "#00BFFF",
      //   
      // },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#00BFFF",
        secondary: "#00BFFF",
        tertiary: '#c4e1f6',
        cardbg: "#212121",
      },
    },
  },
  plugins: [],
};
export default config;
