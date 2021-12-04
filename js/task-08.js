const refs = {
    form: document.querySelector('.login-form'),
    button: document.querySelector('button')

}

const onFormSubmit = (event) =>{
    event.preventDefault();

    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    // one of options
    // if (email === '' || password === '') {
    //     alert('All fields must be filled');
    // }

    if (!email || !password) {
        alert('All fields must be filled');
    }
    else {
        const userEmail = email;
        const userPassword = password;

        const allData = {
            userEmail,
            userPassword,
        };
        console.log(allData);

        // Это другой вариант для отправки данных

        const dataFromForm = {};
        const formData = new FormData(event.currentTarget);

        formData.forEach((value, name) => {
            dataFromForm[name] = value;
        })
        console.log(dataFromForm);

        refs.form.reset()
    }
}

refs.form.addEventListener('submit', onFormSubmit);


