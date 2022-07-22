// given the recipes bellow put them all on the HTML page using loops

let recipes = [
    {
        title: "Green Thai Curry",
        time: 30,
        calories: 750,
        ingredients: ["350g Chicken Thigh", "1 cup (250ml) chicken or vegetable broth", "14oz coconut milk", "1 - 3 tsp fish sauce", "1 - 3 tsp white sugar ", "1/8 tsp salt", "2 Japanese eggplants or Zuccini", "2 Yukon Potato"]
    },
    {
        title: "Baccon Mac & Cheese",
        time: 40,
        calories: 500,
        ingredients: ["12oz baccon", "2 tablespoons flour", "2 1/2 cups water", "4 cups milk", "16oz short uncooked pasta", "1/2 teaspoon salt", "1/4 teaspoon", "garlic powder", "1/4 teaspoon onion powder", "1/2 teaspoon smoked paprika", "1/4 teaspoon pepper", "4 cups shredded cheddar cheese", "1 tablespoon chopped parsley"]
    },
    {
        title: "Broccoli Pesto Pasta",
        time: 40,
        calories: 690,
        ingredients: ["1 lb cooked pasta", "4 cups broccoli florets", "2 cups basil leaves, lightly packed", "2 garlic cloves", "1/4 cup pine nuts", "1 cup extra virgin olive oil", "1/2 tbsp salt", "1 cup Parmigiano-Reggiano, grated"]
    },
    {
        title: "Sesame Garlic Ramen Noodles",
        time: 25,
        calories: 380,
        ingredients: ["3 Packs instant ramen noodles, flavor packets discarded", "1/4 cup low sodium soy sauce", "1/4 cup oyster sauce", "1 tbsp rice vinegar", "1 tbsp brown sugar, optional", "1/2-1 cup chili sauce", "1/4 cup water", "2 tbsp toasted sesame oil", "3 cloves garlic, minced", "1tbsp freshly grated ginger", "4-6 green onions, thinly sliced", "1 tbsp sesame seeds"]
    }
]

// Your code goes here:

// Each recipe should be in its own div, that can be recCont. We are declaring it here since we will want to change its value with each itteration of the loop.

let recCont = document.getElementsByClassName('recipes')[0];
console.log(recCont);


recipes.forEach((recipe) => {
    let br = document.createElement("br");
    let br2 = document.createElement("br");
    let br3 = document.createElement("br");
    let br4 = document.createElement("br");


    let itemR = document.createElement('div');

    let itemRText = document.createTextNode(`${recipe.title}`);
    itemR.appendChild(itemRText);

    itemR.appendChild(br);

    itemRText = document.createTextNode(`Time: ${recipe.time} mins`);
    itemR.appendChild(itemRText);

    itemR.appendChild(br2);

    itemRText = document.createTextNode(`Calories: ${recipe.calories} cal`);
    itemR.appendChild(itemRText);

    itemR.appendChild(br3);

    itemRText = document.createTextNode(`----Ingredients----`);
    itemR.appendChild(itemRText);

    itemR.appendChild(br4);


    for (let i = 0; i < recipe.ingredients.length; i++) {

        itemRText = document.createTextNode(`${recipe.ingredients[i]}`);
        itemR.appendChild(itemRText);

        let br = document.createElement("br");
        itemR.appendChild(br);
    }

    recCont.appendChild(itemR);
})


// HINT: Using .map will be very helpful when itterating through the ingredients array.
