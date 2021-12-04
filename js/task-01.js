
const itemsEl = document.querySelectorAll('.item');


const numberOfCategories = itemsEl.length;

console.log(`Number of categories: ${numberOfCategories}`);


for (let i = 0; i < itemsEl.length; i += 1){
    
    console.log(`Category: ${itemsEl[i].children[0].innerHTML}`);
    
    console.log(`Elements: ${itemsEl[i].children[1].children.length}`);
    
};

// Другой вариант

// itemsEl.forEach(element => {
//     console.log(`Category: ${element.firstElementChild.innerHTML}`);
//     console.log(`Elements: ${element.lastElementChild.children.length}`);
// });

// Третий вариант

// itemsEl.forEach(element => {
//     const title = element.querySelector('h2');
//     const liElement = element.querySelectorAll('li');

//     console.log(`Category: ${title.innerHTML}`);
//     console.log(`Elements: ${liElement.length}`);
// })

