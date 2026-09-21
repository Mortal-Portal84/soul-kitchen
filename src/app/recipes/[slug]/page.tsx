import Link from "next/link"

import { fetchFilteredRecipes, fetchRecipesPages } from "@/app/api/client"
import { translateTitle } from "@/app/lib"
import Pagination from "@/app/ui/pagination"
import Card from "@/app/ui/card/card"

import styles from '@/app/page.module.scss'
import { Suspense } from "react"

const Page = async (props: {
  params: Promise<{
    slug: string
  }>,
  searchParams?: Promise<{
    query?: string
    page?: string
  }>
}) => {
  const {slug} = await props.params
  const title = translateTitle(slug)
  const searchParams = await props.searchParams
  const query = searchParams?.query || ''
  const currentPage = Number(searchParams?.page) || 1
  const recipes = await fetchFilteredRecipes(query, currentPage, slug)
  const totalPages = await fetchRecipesPages(query, slug)

  if (recipes.length === 0) {
    return <h3 className={styles.pageEmptyPlaceholder}>По вашему запросу данных блюд не найдено 😢</h3>
  }

  return (
    <>
      <h2 className={styles.pageTitle}>{title}</h2>

      <ul className={styles.pageList}>
        {recipes.map((recipe) =>
          <li key={recipe.id}>
            <Link href={`/recipes/${slug}/${recipe.id}`}>
              <Card recipe={recipe}/>
            </Link>
          </li>)}
      </ul>

      <Suspense fallback={<div>Загрузка поиска...</div>}>
        <Pagination totalPages={totalPages}/>
      </Suspense>
    </>
  )
}

export default Page