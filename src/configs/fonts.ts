import {
  Fira_Code as FontMono,
  Roboto as FontSans,
  Inter,
} from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--latin",
});

export const fontSans = FontSans({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});
