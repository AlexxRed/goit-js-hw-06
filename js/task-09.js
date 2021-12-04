const refs = {
  body: document.querySelector('body'),
  button: document.querySelector('.change-color'),
  text: document.querySelector('.color'),
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onButtonChangeColor = () => {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.text.textContent = refs.body.style.backgroundColor
  console.log(refs.body.style.backgroundColor);
}



refs.button.addEventListener('click', onButtonChangeColor);

