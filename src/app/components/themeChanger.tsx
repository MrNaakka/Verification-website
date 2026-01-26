'use client'

import { useTheme } from "next-themes"

import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export default function ThemeChanger() {

  const [mounted, setMounted] = useState(false)

  const { theme, setTheme } = useTheme()
  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) return null

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light")

  }
  return (

    <span onClick={handleThemeChange} className="p-2 cursor-pointer">
      {theme === "light" ? <Sun /> : <Moon />}
    </span>
  )
}

