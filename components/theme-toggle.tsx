"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  console.log("Current theme:", theme)

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    console.log("Switching theme to:", newTheme)
    setTheme(newTheme)
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative h-10 w-10 rounded-full glass-effect hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}