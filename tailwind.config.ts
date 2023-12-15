import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        canvas: {
          DEFAULT: "#181D31",
        },
        accent: {
          DEFAULT: "#678983",
        },
        "text-on": {
          DEFAULT: "#F0E9D2",
        },
        "text-off": {
          DEFAULT: "#E6DDC4",
        },
        term: {
          DEFAULT: "#393E46",
          red: "#CE7777",
          green: "#1F8A70",
        },
      },
    },
  },
  plugins: [],
};
export default config;
