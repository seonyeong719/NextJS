import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: "600px",
      tablet: "800px",
    },
    extend: {
      colors: {
        primary: {
          100: "#5FCDFC",
          200: "#0BB3FB",
        },
        subColor: `#FDF3D8`,
        gray: {
          100: "#E9E9E9",
          200: "#D9D9D9",
          300: "#656565",
        },
        hover: "#178AF4",
        font: {
          100: "#646F7C",
          200: "#808080",
          error: "#FF0000",
          success: "#02B62D",
          black: "#000000",
          white: "#FFFFFF",
        },
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        md: "1.25rem",
        big: "1.5rem",
        lg: "1.75rem",
        xl: "2rem",
      },
      fontWeight: {
        light: "300",
        regular: "400",
        bold: "700",
        extraBold: "900",
      },
    },
  },
  plugins: [],
};
export default config;
