const ref = {
    nameInput: document.querySelector('#name-input'),
    nameOutput: document.querySelector('#name-output')
};

ref.nameInput.addEventListener('input', inputChangeOutput);

function inputChangeOutput(event) {
    event.preventDefault();
    if (!event.currentTarget.value ) {
        ref.nameOutput.textContent = 'Anonymous';
    } else {
        ref.nameOutput.textContent = event.currentTarget.value;
    };
}