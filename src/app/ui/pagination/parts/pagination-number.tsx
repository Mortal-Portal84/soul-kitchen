import clsx from "clsx"
import Link from "next/link"

import styles from '../pagination.module.scss'

export const PaginationNumber = ({
                                   page,
                                   href,
                                   isActive,
                                   position,
                                 }: {
  page: number | string;
  href: string;
  position?: 'first' | 'last' | 'middle' | 'single';
  isActive: boolean;
}) => {
  const className = clsx(
    styles.paginationNumber,
    {
      [styles.paginationNumberFirst]: position === 'first' || position === 'single',
      [styles.paginationNumberLast]: position === 'last' || position === 'single',
      [styles.paginationNumberActive]: isActive,
      [styles.paginationNumberMiddle]: !isActive && position !== 'middle',
      [styles.paginationNumberDots]: position === 'middle',
    },
  )

  return isActive || position === 'middle' ? (
    <div className={className}>{page}</div>
  ) : (
    <Link href={href} className={className}>
      {page}
    </Link>
  )
}