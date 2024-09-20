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
        brand: {
          blue1: "#0288D1",
          blue2: "#457b9d",
          blue3: "#1d3557",
          blue4: "#a8dadc",
          blue5: "#264653",
          white1: "#edf6f9",
          white2: "#edf2f4",
          white3: "#f1faee",
          orange1: "#e76f51",
          orange2: "#f4a261",
          yellow1: "#e9c46a",
          red1: "#e63946",
          green1: "#2a9d8f"
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
        lora: ['Lora', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        courier: ['Courier', 'sans-serif'],
        couriernew: ['Courier New', 'sans-serif'],
        monospace: ['monospace', 'sans-serif'],
        georgia: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
