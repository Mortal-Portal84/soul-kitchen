import Link from "next/link"
import { Suspense } from "react"
import Card from "@/app/ui/card/card"
import Pagination from "@/app/ui/pagination"

import { fetchFilteredRecipes, fetchRecipesPages } from "@/app/api/client"

import styles from "./page.module.scss"

const Home = async (props: {
  searchParams?: Promise<{
    query?: string
    page?: string
  }>
}) => {
  const searchParams = await props.searchParams
  const query = searchParams?.query || ''
  const currentPage = Number(searchParams?.page) || 1
  const totalPages = await fetchRecipesPages(query)
  const recipes = await fetchFilteredRecipes(query, currentPage)

  if (recipes.length === 0) {
    return <h3 className={styles.pageEmptyPlaceholder}>По вашему запросу данных блюд не найдено 😢</h3>
  }

  return (
    <div className={styles.page}>
      <h2 className={styles.pageTitle}>Все блюда</h2>

      <ul className={styles.pageList}>
        {recipes.map((recipe) =>
          <li key={recipe.id}>
            <Link href={`/recipes/${recipe.category.en}/${recipe.id}`}>
              <Card recipe={recipe}/>
            </Link>
          </li>
        )}
      </ul>

      <Suspense fallback={<div>Загрузка поиска...</div>}>
        <Pagination totalPages={totalPages}/>
      </Suspense>
    </div>
  )
}

export default Home