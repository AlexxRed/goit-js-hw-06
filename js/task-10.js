function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('input'),
  buttonCreate: document.querySelector('[data-create]'),
  buttonDestroy: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes')
};

const createBoxes = (amount) => {
  const inputValue = amount.target.value;

  const arrNumbersOfDiv = Array.from({ length: inputValue }).fill('<div></div>');
  // const markUp= [];
  // const markupAdd = arrNumbersOfDiv.reduce((acc, element, index, arr) => {
  // markUp.push(`<div  style="width: ${acc+10}px; height: ${acc+10}px; background-color: ${getRandomHexColor()};"></div>`)
  // },20)
  // console.log(markup);

  const markUp = [];
  let totalWidth = 20;
  let totalHeight = 20;

  for (let i = 0; i < arrNumbersOfDiv.length; i += 1) {
    markUp.push(`<div  style="width: ${totalWidth += 10}px; height: ${totalHeight += 10}px; background-color: ${getRandomHexColor()};"></div>`)
  };

  const onAddBoxes = () => {
    const fullmarkUp = markUp.join('');
    refs.boxes.innerHTML = fullmarkUp
  };

  const onDestroyBoxes = () => {
    refs.boxes.innerHTML = '';
  }

  refs.buttonCreate.addEventListener('click', onAddBoxes);
  refs.buttonDestroy.addEventListener('click', onDestroyBoxes);

};

refs.input.addEventListener('input', createBoxes);