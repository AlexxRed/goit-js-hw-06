
const itemsEl = document.querySelectorAll('.item');


const numberOfCategories = itemsEl.length;

console.log(`Number of categories: ${numberOfCategories}`);


for (let i = 0; i < itemsEl.length; i += 1){
    
    console.log(`Category: ${itemsEl[i].children[0].innerHTML}`);
    
    console.log(`Elements: ${itemsEl[i].children[1].children.length}`);
    
};
