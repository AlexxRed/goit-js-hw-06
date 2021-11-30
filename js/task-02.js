const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsEl = document.querySelector('#ingredients');

const makeElementsOfIngredients = ingredients => {
  return ingredients.map(ingredient => {
  const liEl = document.createElement('li');
  liEl.textContent = ingredient;
  liEl.classList.add('item');
  
  return liEl;
  });
  
}

const elementsOfIngredients = makeElementsOfIngredients(ingredients)


ingredientsEl.append(...elementsOfIngredients);

// ================= option
// const elementsOfIngredients = ingredients.map(ingredient => {
//   const liEl = document.createElement('li');
//   liEl.textContent = ingredient;
//   liEl.classList.add('item');
  
//   return liEl;
// });