const api_key = 'd49084b3a4264bfcaea89e7f6301ec61';
async getRecipes(){
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apikey=${api_key}`)
    const data = await response.json();
    return data.recipes;
 }
 
 async function init(){
    const recipes = await getRecipes();
}

init()