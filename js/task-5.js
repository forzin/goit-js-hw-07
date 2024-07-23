function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const bodyChange = document.querySelector(`body`);
const spanCalor = document.querySelector(`.color`);
const buttonChangeCalor = document.querySelector(`.change-color`);

const changeCalorForButton = () => {
  const newCalor = getRandomHexColor();
  spanCalor.textContent = newCalor;
  bodyChange.style.backgroundColor = newCalor;
}


buttonChangeCalor.addEventListener(`click`, changeCalorForButton);
