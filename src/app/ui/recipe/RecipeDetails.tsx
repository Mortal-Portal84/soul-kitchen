import { type FC } from 'react'
import Image from "next/image"

import { Recipe } from "@/app/models"

import styles from './RecipeDetails.module.scss'

type Props = {
  recipe: Recipe
}

const RecipeDetails: FC<Props> = ({recipe}) => {

  return (
    <div className={styles.recipe}>
      <h2 className={styles.recipeTitle}>{recipe.name}</h2>

      <div className={styles.recipeWrapper}>
        <h3 className={styles.recipeSubtitle}>Ингредиенты:</h3>

        <Image
          className={styles.recipeImage}
          src={recipe.image}
          alt={`Изображение ${recipe.name}`}
          width={430}
          height={320}
        />

        <ol className={styles.recipeIngridients}>
          {recipe.ingredients.map((ingredient) =>
            <li className={styles.recipeIngridient} key={ingredient.id}>
              <span>{ingredient.name}: {ingredient.count !== 0 ? ingredient.count : ""} {ingredient.unit}</span>
            </li>
          )}
        </ol>
      </div>

      <h3 className={`${styles.recipeSubtitle} ${styles.recipeSubtitleCenter}`}>Шаги приготовления:</h3>

      <ul className={styles.recipeSteps}>
        {recipe.steps.map((step) =>
          <li key={step.id} className={styles.recipeStep}>
            <Image
              className={styles.recipeStepImage}
              src={step.picture}
              alt={`Изображение шага номер ${step.stepNumber}`}
              width={320}
              height={210}
            />
            <p className={styles.recipeStepText}>
              {step.text}
            </p>
          </li>
        )}
      </ul>
    </div>
  )
}

export default RecipeDetails