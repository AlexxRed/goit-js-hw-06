
const refs = {
    buttonDecrementRef: document.querySelector('[data-action="decrement"]'),
    buttonIncrementRef: document.querySelector('[data-action="increment"]'),
    buttonValueRef: document.querySelector('#value'),

}

refs.buttonDecrementRef.addEventListener('click', handleButtonDecrementClick);
refs.buttonIncrementRef.addEventListener('click', handleButtonIncrementClick);

let counterValue = refs.buttonValueRef.textContent = 0;

function handleButtonDecrementClick(event) {
    event.preventDefault()
    refs.buttonValueRef.textContent = counterValue  -= 1;
};

function handleButtonIncrementClick(event) {
    event.preventDefault()
    refs.buttonValueRef.textContent = counterValue  += 1;
}



