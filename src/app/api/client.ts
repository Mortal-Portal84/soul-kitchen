import postgres from 'postgres'
import mockData from "@/app/api/mockData"
import { cookies } from "next/headers"
import { createClient } from "@/app/lib/utils/supabase/server"

const ITEMS_PER_PAGE = 4;

const sql = postgres(process.env.NEXT_PUBLIC_SUPABASE_URL!, { ssl: 'require' });

export async function fetchFilteredRecipes(
  query: string,
  currentPage: number,
  category?: string // 🌟 Необязательный параметр категории
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    let recipes = [...mockData];

    // Если мы на странице категории (например, salads), фильтруем по ней
    if (category) {
      recipes = recipes.filter(
        (recipe) => recipe.category.en === category
      );
    }

    // Применяем текстовый поиск по названию
    if (query) {
      recipes = recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    // Применяем пагинацию
    return recipes.slice(offset, offset + ITEMS_PER_PAGE);
  } catch (error) {
    console.error('Data Fetch Error:', error);
    throw new Error('Failed to fetch recipes.');
  }
}

// 2. Функция для подсчета общего количества страниц
export async function fetchRecipesPages(query: string, category?: string) {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)
  const { data } = await supabase.from('recipes').select()

  try {
    let recipes = [...mockData];

    console.log(data)

    if (category) {
      recipes = recipes.filter((recipe) => recipe.category.en === category);
    }

    if (query) {
      recipes = recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(query.toLowerCase())
      );
    }

    return Math.ceil(recipes.length / ITEMS_PER_PAGE);
  } catch (error) {
    console.error('Pages Fetch Error:', error);
    throw new Error('Failed to fetch total pages.');
  }
}