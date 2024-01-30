import {
  Fira_Code as FontMono,
  Poppins as FontSans,
  Inter,
} from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--latin",
});

export const fontSans = FontSans({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});
