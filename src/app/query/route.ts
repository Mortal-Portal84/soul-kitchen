import postgres from 'postgres';

// Инициализируем подключение. Для Supabase Pooler режим ssl: 'require' тоже обязателен.
const sql = postgres(process.env.SK_STORAGE_POSTGRES_URL!, { ssl: 'require' });

async function getRecipesWithTranslations() {
  // Выбираем ID рецепта, время, картинку, слаг категории и название рецепта на русском
  const data = await sql`
    SELECT 
      r.id, 
      r.cooking_time, 
      r.image_url, 
      c.slug AS category_slug,
      rt.title AS recipe_title,
      rt.description AS recipe_description
    FROM public.recipes r
    LEFT JOIN public.categories c ON r.category_id = c.id
    LEFT JOIN public.recipe_translations rt ON r.id = rt.recipe_id
    WHERE rt.language_code = 'ru'; -- Фильтруем, чтобы получить только русскую локализацию
  `;

  return data;
}

export async function GET() {
  try {
    const recipes = await getRecipesWithTranslations();
    return Response.json(recipes);
  } catch (error: any) {
    // Выводим ошибку в консоль сервера, чтобы легче было отлаживать
    console.error('Database error:', error);
    return Response.json({ error: error.message || error }, { status: 500 });
  }
}
