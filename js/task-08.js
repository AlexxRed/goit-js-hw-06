const refs = {
    form: document.querySelector('.login-form'),
    button: document.querySelector('button')

}

const onFormSubmit = (event) =>{
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const email = formElements.email;
    const password = formElements.password;

    if (email.value === '') {
        alert('All fields must be filled');

    } if (password.value === '') {
        alert('All fields must be filled');
    }
    else {
        const userEmail = email.value;
        const userPassword = password.value

        const allData = {
            userEmail,
            userPassword,
        };

        console.log(allData);

        // Это другой вариант для отправки данных


        const formData = new FormData(event.currentTarget);
        formData.forEach((value, name) => {
            console.log(name);
            console.log(value);
            
        })
    }
    
    refs.form.reset()
}

refs.form.addEventListener('submit', onFormSubmit);


