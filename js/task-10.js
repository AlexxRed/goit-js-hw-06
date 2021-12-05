function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



const refs = {
  input: document.querySelector('#controls + input'),
  buttonCreate: document.querySelector('[data-create]'),
  buttonDestroy: document.querySelector('[data-destroy]'),
};

refs.input.addEventListener('input', createBoxes)


const arrNumbersOfDiv = Array.from({length: 50 }).fill(1))

const createBoxes = (amount) => {
  

}

console.log(Array.from({length: 50 }).fill(1));