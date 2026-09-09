import mockData from "@/app/api/mockData"
import RecipeDetails from "@/app/ui/recipe"

type Props = {
  params: Promise<{
    slug: string
    id: string
  }>
}

const RecipeDetailPage = async ({ params }: Props) => {
  const { slug, id } = await params;

  const recipe = mockData.find((item) => item.id === id);

  console.log(slug, 'для Breadcrumbs')

  if (!recipe) {
    return <h2>Рецепт не найден 😢</h2>;
  }

  return (
    <RecipeDetails recipe={recipe} />
  )
}

export default RecipeDetailPage
