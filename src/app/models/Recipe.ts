export const Category = {
  baking: {en: 'baking', ru: 'выпечка'},
  salads: {en: 'salads', ru: 'салаты'},
  desserts: {en: 'desserts', ru: 'десерты'},
  soups: {en: 'soups', ru: 'супы'},
  appetizers: {en: 'appetizers', ru: 'закуски'},
  sideDishes: {en: 'side-dishes', ru: 'гарниры'},
  drinks: {en: 'drinks', ru: 'напитки'}
} as const

export type Category = (typeof Category)[keyof typeof Category]

export const Unit = {
  gram: {ru: 'гр.', en: 'gr.'},
  spoon: {ru: 'ст. л.', en: 'sp.'},
  teaspoon: {ru: 'ч.л.', en: 't.s.'},
  piece: {ru: 'шт.', en: 'piece'},
  ml: {ru: 'мл', en: 'ml'},
  taste: {ru: 'по вкусу', en: 'to taste'},
  glass: {ru: 'стак.', en: 'gls.'}
}

export type Unit = (typeof Unit)[keyof typeof Unit]

export type Ingredient = {
  id: number
  name: string
  amount: number | null
  unit: string
}

type Step = {
  id: string;
  stepNumber: number;
  picture: string;
  text: string;
}

export type Recipe = {
  id: string;
  name: string;
  description: string;
  image: string;
  authorId: string;
  category: Category;
  ingredients: Ingredient[];
  steps: Step[]
}

export type RecipeDetailStep = {
  id: number
  stepNumber: number
  image: string | null
  text: string
}

// Данные для страницы рецепта (форма, в которую приводим ответ Prisma)
export type RecipeDetail = {
  id: number
  name: string
  description: string | null
  image: string | null
  categorySlug: string | null
  cookingTime: number
  servings: number
  ingredients: Ingredient[]
  steps: RecipeDetailStep[]
}

// Данные для карточки рецепта в списках (форма, в которую приводим ответ Prisma)
export type RecipeCard = {
  id: number
  name: string
  description: string | null
  image: string | null
  categorySlug: string | null
}

