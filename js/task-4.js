const formLoginInfo = document.querySelector(`.login-form`);

const formSubmit = event => {
    event.preventDefault();
    const email = formLoginInfo.elements.email.value.trim();
    const password = formLoginInfo.elements.password.value.trim();


    if (!email || !password) {
        alert('All form fields must be filled in');
        return;
    } else {
        const userLogInfo = {
            email: email,
            password: password,
        }

        console.log(userLogInfo);

        formLoginInfo.reset();
    }

    
}

formLoginInfo.addEventListener(`submit`, formSubmit);

