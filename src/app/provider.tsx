"use client";

import { ThemeProvider as RadixUIProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { FC } from "react";

export interface RadixUIProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export const RadixUIProviders: FC<RadixUIProps> = ({
  children,
  themeProps,
}) => {
  return <RadixUIProvider {...themeProps}>{children}</RadixUIProvider>;
};
