import * as React from 'react'
import { Suspense } from "react"
import Link from "next/link"

import Button from "@/app/ui/button"
import Searchbar from "@/app/ui/searchbar"
import { signOut } from "@/auth"

import styles from './header.module.scss'

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
          <form
            action={async () => {
              'use server'
              await signOut({ redirectTo: '/' })
            }}
          >
            <Button type="submit">Выйти</Button>
          </form>

          <Link href="/">
            <Button>Добавить рецепт</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
