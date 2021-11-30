
const itemsEl = document.querySelectorAll('.item');


const numberOfCategories = itemsEl.length;

console.log(`Number of categories: ${numberOfCategories}`);


// const categoryEl = document.querySelectorAll("h2")

// for (let i = 0; i < categoryEl.length; i += 1){
//     console.log(categoryEl[i].innerHTML);
// }

// const allElements = document.querySelectorAll('.item')

// console.log(allElements);



for (let i = 0; i < itemsEl.length; i += 1){
    
    console.log(`Category: ${itemsEl[i].children[0].innerHTML}`);
    
    console.log(`Elements: ${itemsEl[i].children[1].children.length}`);
    
};
