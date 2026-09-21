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
  id: string;
  name: string;
  count: number;
  unit: Unit
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

