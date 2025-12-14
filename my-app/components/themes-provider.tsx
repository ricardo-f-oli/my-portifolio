"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      enableSystem
      attribute={`class`}
      defaultTheme="system"
      disableTransitionOnChange>
      {children}
    </NextThemesProvider>
  )
}