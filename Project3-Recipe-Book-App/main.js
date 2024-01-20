const api_key = "d49084b3a4264bfcaea89e7f6301ec61";
const RecipelistElement = document.getElementById("recipe-list");

function displayRecipes(recipes) {
  RecipelistElement.innerHTML = "";
  recipes.array.forEach((element) => {
    const item = document.createElement("li");
    item.classList.add("recipe-item");
    const recipeimg = document.createElement("img");
    recipeimg.src = element.image;
    recipeimg.alt = "recipe img";
    item.appendChild(recipeimg);
    const recipeName = document.createElement("h2");
    recipeName.innerText = element.title;
    const ingredients = document.createElement("p");
    ingredients.innerHTML = `<strong>Ingredients: </strong> ${element.extendedIngredients
      .map((ing) => {
        ing.orginal;
      })
      .join(", ")}`;
    const recipeElement = document.createElement("a");
    recipeElement.href = item.sourceUrl;
    recipeElement.innerText = "View Recipe";
    item.appendChild(recipeElement);
    item.appendChild(recipeimg);
    item.appendChild(recipeName);
    item.appendChild(ingredients);
    RecipelistElement.appendChild(item);
  });
}
async function getRecipes() {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?number=10&apikey=${api_key}`
  );
  const data = await response.json();
  return data.recipes;
}

async function init() {
  const recipes = await getRecipes();
}

init();
