import { type FC } from 'react'
import Link from "next/link"

import styles from './footer.module.scss'

const Footer: FC = ({}) => {

  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <Link href={'https://github.com/code-ashram'} target="_blank" rel="noopener noreferrer">CodeAshram &copy;</Link>
      </div>
    </footer>
  )
}

export default Footer