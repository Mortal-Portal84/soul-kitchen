import type { Metadata } from "next"
import * as React from "react"

import { geist } from "@/app/ui/fonts"

import "./globals.css"

export const metadata: Metadata = {
  title: "Soul Kitchen",
  description: "Vegetarian recipes collection",
}

export default function RootLayout({children}: LayoutProps<"/">) {
  return (
    <html lang="ru">
    <body className={`${geist.className} antialiased`}>
    <div className="container">
      <main className="main">
        {children}
      </main>
    </div>
    </body>
    </html>
  )
}
