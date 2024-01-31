import { fontSans } from "@/configs/fonts";
import { siteConfig } from "@/configs/site";
import { LayoutProps } from "@/types/LayoutProps";
import { Container, Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import clsx from "clsx";
import type { Metadata } from "next";
import "../styles/globals.css";
import { QueryProviders, RadixUIProviders } from "./provider";

export const metadata: Metadata = {
  title: siteConfig.name || "Create Next App",
  description: siteConfig.description || "Generated by create next app",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={clsx(fontSans.className, "bg-j-background")}>
        <RadixUIProviders
          themeProps={{
            attribute: "class",
            defaultTheme: "light",
            enableSystem: true,
            disableTransitionOnChange: true,
          }}
        >
          <QueryProviders>
            <Theme>
              {/* <Navbar /> */}
              <main className="min-h-screen">
                <Container>{children}</Container>
              </main>
            </Theme>
          </QueryProviders>
        </RadixUIProviders>
      </body>
    </html>
  );
}
