"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider as RadixUIProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { FC, useState } from "react";

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

export function QueryProviders({ children }: React.PropsWithChildren) {
  const [client] = useState(new QueryClient());

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
