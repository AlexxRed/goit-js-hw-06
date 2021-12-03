const refs = {
inputEl: document.querySelector('#font-size-control'),
textEl: document.querySelector('#text')
}


const handleChangeFontSize = (e) => {
    const inputValue = e.target.value;
    refs.textEl.style.fontSize = `${inputValue}px`
}

refs.inputEl.addEventListener('input', handleChangeFontSize)

