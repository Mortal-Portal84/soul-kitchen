import { defineContract } from '@prisma/orm-postgres/contract-builder';
import { timestamptzTemporalColumn, varcharColumn } from '@prisma/orm-postgres/adapter/column-types';

export const contract = defineContract({}, ({ field, model, rel }) => {

  const Categories = model('Categories', {
    fields: {
      id: field.bigint(),
      slug: field.text(),
    },
  }).sql({ table: 'categories' });

  const CategoryTranslations = model('CategoryTranslations', {
    fields: {
      id: field.bigint(),
      categoryId: field.bigint().column('category_id').optional(),
      languageCode: field.column(varcharColumn(10)).column('language_code'),
      name: field.text(),
    },
  }).sql({ table: 'category_translations' });

  const Ingredients = model('Ingredients', {
    fields: {
      id: field.bigint(),
      createdAt: field.column(timestamptzTemporalColumn).column('created_at').optional(),
    },
  }).sql({ table: 'ingredients' });

  const IngredientTranslations = model('IngredientTranslations', {
    fields: {
      id: field.bigint(),
      ingredientId: field.bigint().column('ingredient_id').optional(),
      languageCode: field.column(varcharColumn(10)).column('language_code'),
      name: field.text(),
    },
  }).sql({ table: 'ingredient_translations' });

  const Recipes = model('Recipes', {
    fields: {
      id: field.bigint(),
      authorId: field.uuidNative().column('author_id').optional(),
      cookingTime: field.int().column('cooking_time'),
      servings: field.int().default(1),
      imageUrl: field.text().column('image_url').optional(),
      createdAt: field.column(timestamptzTemporalColumn).column('created_at').optional(),
      updatedAt: field.column(timestamptzTemporalColumn).column('updated_at').optional(),
      categoryId: field.bigint().column('category_id').optional(),
    },
  }).sql({ table: 'recipes' });

  const RecipeSteps = model('RecipeSteps', {
    fields: {
      id: field.bigint(),
      recipeId: field.bigint().column('recipe_id').optional(),
      stepNumber: field.int().column('step_number'),
      imageUrl: field.text().column('image_url').optional(),
    },
  }).sql({ table: 'recipe_steps' });

  const RecipeStepTranslations = model('RecipeStepTranslations', {
    fields: {
      id: field.bigint(),
      stepId: field.bigint().column('step_id').optional(),
      languageCode: field.column(varcharColumn(10)).column('language_code'),
      instruction: field.text(),
    },
  }).sql({ table: 'recipe_step_translations' });

  const RecipeTranslations = model('RecipeTranslations', {
    fields: {
      id: field.bigint(),
      recipeId: field.bigint().column('recipe_id').optional(),
      languageCode: field.column(varcharColumn(10)).column('language_code'),
      title: field.text(),
      description: field.text().optional(),
    },
  }).sql({ table: 'recipe_translations' });

  const Units = model('Units', {
    fields: {
      id: field.bigint(),
      code: field.column(varcharColumn(50)).unique(),
    },
  }).sql({ table: 'units' });

  const UnitTranslations = model('UnitTranslations', {
    fields: {
      id: field.bigint(),
      unitId: field.bigint().column('unit_id').optional(),
      languageCode: field.column(varcharColumn(10)).column('language_code'),
      label: field.column(varcharColumn(50)),
    },
  }).sql({ table: 'unit_translations' });

  return {
    models: {
      Categories: Categories.relations({
        categoryTranslations: rel.hasMany(CategoryTranslations, { by: 'categoryId' }),
        recipes: rel.hasMany(Recipes, { by: 'categoryId' }),
      }),
      CategoryTranslations: CategoryTranslations.relations({
        category: rel.belongsTo(Categories, { from: 'categoryId', to: 'id' }),
      }),
      Ingredients: Ingredients.relations({
        ingredientTranslations: rel.hasMany(IngredientTranslations, { by: 'ingredientId' }),
      }),
      IngredientTranslations: IngredientTranslations.relations({
        ingredient: rel.belongsTo(Ingredients, { from: 'ingredientId', to: 'id' }),
      }),
      Recipes: Recipes.relations({
        category: rel.belongsTo(Categories, { from: 'categoryId', to: 'id' }),
        recipeSteps: rel.hasMany(RecipeSteps, { by: 'recipeId' }),
        recipeTranslations: rel.hasMany(RecipeTranslations, { by: 'recipeId' }),
      }),
      RecipeSteps: RecipeSteps.relations({
        recipe: rel.belongsTo(Recipes, { from: 'recipeId', to: 'id' }),
        recipeStepTranslations: rel.hasMany(RecipeStepTranslations, { by: 'stepId' }),
      }),
      RecipeStepTranslations: RecipeStepTranslations.relations({
        step: rel.belongsTo(RecipeSteps, { from: 'stepId', to: 'id' }),
      }),
      RecipeTranslations: RecipeTranslations.relations({
        recipe: rel.belongsTo(Recipes, { from: 'recipeId', to: 'id' }),
      }),
      Units: Units.relations({
        unitTranslations: rel.hasMany(UnitTranslations, { by: 'unitId' }),
      }),
      UnitTranslations: UnitTranslations.relations({
        unit: rel.belongsTo(Units, { from: 'unitId', to: 'id' }),
      }),
    },
  };
});
