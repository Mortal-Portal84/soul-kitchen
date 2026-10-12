import Link from "next/link"
import styles from "./page.module.scss"
import { Button } from "@base-ui/react"

const Home = () => {

  return (
    <div className={styles.page}>
      <Link href="/recipes">
        <Button>Посмотреть рецепты</Button>
      </Link>
    </div>
  )
}

export default Home