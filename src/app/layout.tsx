import type { Metadata } from "next"

import Header from "@/app/ui/header"
import Categories from "@/app/ui/categories"
import Footer from "@/app/ui/footer"

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
    <Header/>

    <div className="container">
      <Categories/>

      <main className="main">
        {children}
      </main>
    </div>

    <Footer/>
    </body>
    </html>
  )
}
