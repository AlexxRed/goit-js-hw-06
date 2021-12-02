const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', makeChangeColorInput)

function makeChangeColorInput(event){
    const inputLength = event.currentTarget.value.length
    
    if (inputRef.dataset.length == inputLength) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
    } else {
        inputRef.classList.add('invalid')
        inputRef.classList.remove('valid');
    }
};
