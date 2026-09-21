'use client'

import * as React from 'react'

import Link from "next/link"

import Button from "@/app/ui/button"
import Searchbar from "@/app/ui/searchbar"

import styles from './header.module.scss'
import { Suspense } from "react"

export default function Header() {

  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <Suspense fallback={<div>Загрузка поиска...</div>}>
          <Searchbar/>
        </Suspense>

        <h1>
          <Link href="/">
            Soul Kitchen - лучшие вегетарианские рецепты! <span aria-hidden="true">🌿</span>
          </Link>
        </h1>

        <div className={styles.headerAuthorize}>
          <Link href="/">
            <Button>Войти</Button>
          </Link>

          <Link href="/">
            <Button>Зарегистрироваться</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
