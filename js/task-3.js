const inputName = document.querySelector(`#name-input`);
const spanName = document.querySelector(`#name-output`);
//console.log(inputName);
const nameForInput = () => {
    const username = inputName.value.trim();

    if (username.length > 0) {
        spanName.textContent = username;
        
    } else {
        spanName.textContent = 'Anonymous';
    } 
    
}

inputName.addEventListener(`input`, nameForInput);
