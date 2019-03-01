export function findObjectWithTheSameProperty(array, recipeId) {
  return array.findIndex(obj => obj.recipe_id === recipeId) !== -1;
}
