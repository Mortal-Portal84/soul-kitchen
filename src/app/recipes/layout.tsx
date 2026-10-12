import type { Metadata } from "next"
import * as React from "react"

import { geist } from "@/app/ui/fonts"
import Categories from "@/app/ui/categories"
import Header from "@/app/ui/header"
import Footer from "@/app/ui/footer"

// import "./globals.css"

export const metadata: Metadata = {
  title: "Soul Kitchen | Recipes",
  description: "Vegetarian recipes collection",
}

export default function RecipesLayout({children}: LayoutProps<"/">) {
  return (
    <>
      <Header/>

      <div className="container">
        <Categories/>

        <main className="main">
          {children}
        </main>
      </div>

      <Footer/>
    </>
  )
}
