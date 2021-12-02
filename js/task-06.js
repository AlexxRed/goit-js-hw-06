const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('input', makeChangeColorInput)

function makeChangeColorInput(event){
    event.preventDefault();
    if (inputRef.data - length === 6) {
        inputRef.style.valid;
    } else {
        inputRef.style.invalid;
    }
};
 