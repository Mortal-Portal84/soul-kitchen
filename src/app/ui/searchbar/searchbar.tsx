'use client'

import { type FC, useState } from 'react'
import { Input } from "@base-ui/react"
import { useDebouncedCallback } from "use-debounce"
import { useSearchParams, usePathname, useRouter } from 'next/navigation'

import styles from "./searchbar.module.scss"

const Searchbar: FC = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  const [inputValue, setInputValue] = useState(searchParams.get('query') || '')

  const handleSearchDebounced = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', '1');
    if (term) {
      params.set('query', term)
    } else {
      params.delete('query')
    }

    replace(`${pathname}?${params.toString()}`)
  }, 300)

  const handleChange = (value: string) => {
    setInputValue(value)
    handleSearchDebounced(value)
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label className={styles.Label}>
        <Input
          placeholder="Поиск рецептов"
          className={styles.Input}
          value={inputValue}
          onChange={(e) => handleChange(e.target.value)}
        />
        <span className={styles.Icon}>🔍</span>
      </label>
    </form>
  )
}

export default Searchbar