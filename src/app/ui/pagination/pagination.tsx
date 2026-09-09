'use client'

import { usePathname, useSearchParams } from "next/navigation"
import { PaginationArrow } from "@/app/ui/pagination/parts/pagination-arrow"
import { PaginationNumber } from "@/app/ui/pagination/parts/pagination-number"
import { generatePagination } from "@/app/lib"

import styles from "./pagination.module.scss"

const Pagination = ({ totalPages }: { totalPages: number }) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get('page')) || 1
  const allPages = generatePagination(currentPage, totalPages)

  if (totalPages <= 1) {
    return null;
  }

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', pageNumber.toString())
    return `${pathname}?${params.toString()}`
  }

  return (
    <>
      <div className={styles.pagination}>
        <PaginationArrow
          direction="left"
          href={createPageURL(currentPage - 1)}
          isDisabled={currentPage <= 1}
        />

        <div className={styles.paginationCount}>
          {allPages.map((page, index) => {
            let position: 'first' | 'last' | 'single' | 'middle' | undefined

            if (index === 0) position = 'first'
            if (index === allPages.length - 1) position = 'last'
            if (allPages.length === 1) position = 'single'
            if (page === '...') position = 'middle'

            return (
              <PaginationNumber
                key={`${page}-${index}`}
                href={createPageURL(page)}
                page={page}
                position={position}
                isActive={currentPage === page}
              />
            )
          })}
        </div>

        <PaginationArrow
          direction="right"
          href={createPageURL(currentPage + 1)}
          isDisabled={currentPage >= totalPages}
        />
      </div>
    </>
  )
}

export default Pagination