import clsx from "clsx"
import Link from "next/link"

import styles from "../pagination.module.scss"

export const PaginationArrow =({
                           href,
                           direction,
                           isDisabled,
                         }: {
  href: string;
  direction: 'left' | 'right';
  isDisabled?: boolean;
}) => {
  const className = clsx(
    styles.paginationArrow,
    {
      [styles.paginationArrowDisabled]: isDisabled,
      'hover:bg-gray-100': !isDisabled,
      'mr-2 md:mr-4': direction === 'left',
      'ml-2 md:ml-4': direction === 'right',
    },
  )

  const icon =
    direction === 'left' ? (
      <div className={styles.paginationIcon}>⬅️</div>
    ) : (
      <div className={styles.paginationIcon}>➡️</div>
    )

  return isDisabled ? (
    <div className={className}>{icon}</div>
  ) : (
    <Link className={className} href={href}>
      {icon}
    </Link>
  )
}