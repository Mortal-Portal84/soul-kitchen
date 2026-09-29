import {db} from "@/app/prisma/db"
import type {RecipeCard, RecipeDetail} from "@/app/models"
import type {Varchar} from "@prisma/orm-postgres/target/codec-types"

const ITEMS_PER_PAGE = 4;

// Общий запрос для списка и для подсчёта страниц, чтобы фильтры всегда совпадали.
// Возвращает null, если категория не найдена.
async function buildRecipesQuery(query: string, category?: string) {
  let recipesQuery = db.orm.public.Recipes;

  // Фильтр по категории
  if (category) {
    const categoryRecord = await db.orm.public.Categories
        .where({ slug: category })
        .first();

    if (!categoryRecord) {
      return null;
    }

    recipesQuery = recipesQuery.where({ categoryId: categoryRecord.id });
  }

  // Поиск по названию
  if (query) {
    recipesQuery = recipesQuery.where((recipe) =>
        recipe.recipeTranslations.some((translation) =>
            translation.title.ilike(`%${query}%`)
        )
    );
  }

  return recipesQuery;
}

export async function fetchFilteredRecipes(
    query: string,
    currentPage: number,
    category?: string,
    languageCode = 'ru',
): Promise<RecipeCard[]> {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const recipesQuery = await buildRecipesQuery(query, category);

    if (!recipesQuery) {
      return [];
    }

    const recipes = await recipesQuery
        // Берём только перевод на нужном языке
        .include('recipeTranslations', (translations) =>
            translations.where({ languageCode: languageCode as Varchar<10> })
        )
        .include('category')
        .orderBy((recipe) => recipe.id.asc())
        .limit(ITEMS_PER_PAGE)
        .offset(offset)
        .all();

    // Приводим данные Prisma к формату приложения
    return recipes.map((recipe) => {
      const translation = recipe.recipeTranslations[0];

      return {
        id: Number(recipe.id),
        name: translation?.title ?? 'Без названия',
        description: translation?.description ?? null,
        image: recipe.imageUrl,
        categorySlug: recipe.category?.slug ?? null,
      };
    });
  } catch (error) {
    console.error('Data Fetch Error:', error);
    throw new Error('Failed to fetch recipes.');
  }
}

// Подсчёт общего количества страниц
export async function fetchRecipesPages(query: string, category?: string) {
  try {
    const recipesQuery = await buildRecipesQuery(query, category);

    if (!recipesQuery) {
      return 0;
    }

    const { total } = await recipesQuery.aggregate((aggregate) => ({
      total: aggregate.count(),
    }));

    return Math.ceil(Number(total) / ITEMS_PER_PAGE);
  } catch (error) {
    console.error('Pages Fetch Error:', error);
    throw new Error('Failed to fetch total pages.');
  }
}

// Один рецепт со всеми шагами для страницы рецепта
export async function fetchRecipeById(
    id: string,
    languageCode = 'ru',
): Promise<RecipeDetail | null> {
  // id в БД — BigInt, а BigInt('abc') бросает исключение
  if (!/^\d+$/.test(id)) {
    return null;
  }

  const code = languageCode as Varchar<10>;

  try {
    const recipe = await db.orm.public.Recipes
        .where({ id: BigInt(id) })
        .include('recipeTranslations', (translations) =>
            translations.where({ languageCode: code })
        )
        .include('category')
        .include('recipeSteps', (steps) =>
            steps
                .include('recipeStepTranslations', (translations) =>
                    translations.where({ languageCode: code })
                )
                .orderBy((step) => step.stepNumber.asc())
        )
        .first();

    if (!recipe) {
      return null;
    }

    const translation = recipe.recipeTranslations[0];

    return {
      id: Number(recipe.id),
      name: translation?.title ?? 'Без названия',
      description: translation?.description ?? null,
      image: recipe.imageUrl,
      categorySlug: recipe.category?.slug ?? null,
      cookingTime: recipe.cookingTime,
      servings: recipe.servings,
      // TODO: в БД пока нет связи рецептов с ингредиентами (recipe_ingredients)
      ingredients: [],
      steps: recipe.recipeSteps.map((step) => ({
        id: Number(step.id),
        stepNumber: step.stepNumber,
        image: step.imageUrl,
        text: step.recipeStepTranslations[0]?.instruction ?? '',
      })),
    };
  } catch (error) {
    console.error('Recipe Fetch Error:', error);
    throw new Error('Failed to fetch recipe.');
  }
}
