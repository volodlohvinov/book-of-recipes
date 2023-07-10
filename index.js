class Recipe {
    constructor(name, ingredients, instructions, cookingTime) {
      this.name = name;
      this.ingredients = ingredients;
      this.instructions = instructions;
      this.cookingTime = cookingTime;
    }
  
    isValid() {
      return (
        this.name &&
        this.ingredients.length > 0 &&
        this.instructions &&
        this.cookingTime > 0
        
      );
    }
  }
  
  class RecipeBook {
    constructor() {
      this.recipes = [];
    }
  
    addRecipe(recipe) {
      if (recipe.isValid()) {
        this.recipes.push(recipe);
      }
    }
  
    findRecipesByTime(cookingTime) {
      return this.recipes.filter((recipe) => recipe.cookingTime <= cookingTime);
    }
  
    findRecipesByIngredients(ingredients) {
      return this.recipes.filter((recipe) =>
        ingredients.every((ingredient) =>
          recipe.ingredients.includes(ingredient)
        )
      );
    }
  }
  
  
  const recipe1 = new Recipe(
    "Recipe 1",
    ["Potato", "Carrot"],
    "Instructions 1",
    30
  );
 
  const recipe2 = new Recipe(
    "Recipe 2",
    ["Potato"],
    "Instructions 2",
    60
  );
  const recipe3 = new Recipe(
    "Рецепт 3",
    ["Onion", "Tomato"],
    "Instructions 3",
    120
  );
  const recipe4 = new Recipe(
    "Recipe 4",
    ["Potato", "Carrot", "Onion"],
    "Instructions 4",
    30
  );
  const recipe5 = new Recipe(
    "Recipe 5",
    ["Potato", "Beet", "Onion"],
    "Instructions 5",
    45
  );
  const recipe6 = new Recipe(
    "Recipe 6",
    ["Potato", "Carrot", "Beet", "cabbage"],
    "Instructions 6",
    105
  );
  const recipe7 = new Recipe(
    "Recipe 7",
    ["Potato", "Eggs", "Chicken"],
    "Instructions 7",
    55
  );
  const recipe8 = new Recipe(
    "Recipe 8",
    ["Potato", "Carrot", "Salad", "Pepper", "Garlic"],
    "Instructions 8",
    90
  );
  const invalidRecipe = new Recipe("", [], "", 0);
  
  
  const recipeBook = new RecipeBook();
  
  
  recipeBook.addRecipe(recipe1);
  recipeBook.addRecipe(recipe2);
  recipeBook.addRecipe(recipe3);
  recipeBook.addRecipe(recipe4);
  recipeBook.addRecipe(recipe5);
  recipeBook.addRecipe(recipe6);
  recipeBook.addRecipe(recipe7);
  recipeBook.addRecipe(recipe8);
  recipeBook.addRecipe(invalidRecipe);
  
  
  const cookingTime = 60;
  const recipesByTime = recipeBook.findRecipesByTime(cookingTime);
  
  
  console.log(`Recipes with a cooking time of no more than ${cookingTime} minutes:`);
  recipesByTime.forEach((recipe) => console.log(recipe.name));
  
  
  
  const ingredients = ["Potato", "Carrot"];
  const recipesByIngredients = recipeBook.findRecipesByIngredients(ingredients);
  
  
  console.log(`Recipes containing the ingredients: ${ingredients.join(", ")}`);
  recipesByIngredients.forEach((recipe) => console.log(recipe.name));
  