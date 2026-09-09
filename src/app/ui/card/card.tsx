import { type FC } from 'react'
import { Recipe } from "@/app/models"
import Image from "next/image"

import styles from './card.module.scss'

type Props = {
  recipe: Recipe
}

const Card: FC<Props> = ({recipe}) => {

  return (
    <div className={styles.card}>
      <Image className={styles.cardImage} src={recipe.image} alt={`Изображение ${recipe.name}`} width={320} height={210}/>

      <div className={styles.cardWrapper}>
        <h3 className={styles.cardTitle}>{recipe.name}</h3>

        <p className={styles.cardText}>{recipe.description}</p>
      </div>
    </div>
  )
}

export default Card