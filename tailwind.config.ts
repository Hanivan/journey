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
        "j-glass": "#EDEDF2",
        "j-background": "#F5F8F8",
        "j-foreground": "#0d0d0d",
        "j-primary": "#54ADD3",
        "j-secondary": "#ECF1B4",
      },
    },
  },
  plugins: [],
};
export default config;
