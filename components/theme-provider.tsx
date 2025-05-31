"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({ children, ...props }: any) {
  console.log("ThemeProvider initialized")
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}