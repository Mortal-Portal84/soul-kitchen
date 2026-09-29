import { type FC } from 'react'
import { RecipeCard} from "@/app/models"
import Image from "next/image"

import styles from './card.module.scss'

type Props = {
  recipe: RecipeCard
}

const Card: FC<Props> = ({recipe}) => {

  return (
    <div className={styles.card}>
      <Image className={styles.cardImage} src={recipe.image ?? '/file.svg'} alt={`Изображение ${recipe.name}`} width={320} height={210}/>

      <div className={styles.cardWrapper}>
        <h3 className={styles.cardTitle}>{recipe.name}</h3>

        <p className={styles.cardText}>{recipe.description}</p>
      </div>
    </div>
  )
}

export default Card