import { type FC } from 'react'

import { Category } from "@/app/models"
import { capitalizeFirstLetter } from "@/app/lib"
import Link from "next/link"
import Button from "@/app/ui/button"

import styles from "./categories.module.scss"

const Categories: FC = () => {

  return (
    <nav className={styles.categories}>
      <ul className={styles.categoriesList}>
        {Object.entries(Category).map(([key, value]) => (
          <li key={key}>
            <Link href={`/recipes/${value.en}`}>
              <Button>{capitalizeFirstLetter(value.ru)}</Button>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Categories