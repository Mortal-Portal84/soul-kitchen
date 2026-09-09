export type Ingredient = {
  id: string;
  name: string;
  count: number;
  unit: 'гр.' | 'ст. л' | 'ч.л' | 'ст.' | 'шт.' | 'мл' | 'по вкусу'
}

type Step = {
  id: string;
  stepNumber: number;
  picture: string;
  text: string;
}

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

