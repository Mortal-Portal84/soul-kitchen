export type Ingredient = {
  id: string;
  name: string;
  count: number;
  measurementValue: 'гр.' | 'ст. л' | 'ч.л' | 'ст.' | 'шт.' | 'мл' | 'по вкусу'
}

type Step = {
  id: string;
  stepNumber: number;
  picture: string;
  text: string;
}

export const Category = {
  baking: 'Выпечка',
  salads: 'Салаты',
  desserts: 'Десерты',
  soups: 'Супы',
  appetizers: 'Закуски',
  sideDishes: 'Гарниры',
  drinks: 'Напитки',
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

