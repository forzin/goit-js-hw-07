function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = controls.querySelector('input');
const listForm = document.querySelector(`#controls`);
const buttonCreate = document.querySelector(`button[data-create]`);
const destroyButton = document.querySelector(`button[data-destroy]`);
const boxes = document.querySelector('#boxes');

const inputSomeNumber = () => {

  const amount = parseInt(input.value, 10)
  if (amount  >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  }


  function createBoxes(amount) {
    destroyBoxes();

      for (let i = 0; i < amount; i++) {
        const newElementItem = document.createElement(`div`);
        const everyIteration = 30 + i * 10;
        newElementItem.style.width = `${everyIteration}px`;
        newElementItem.style.height = `${everyIteration}px`;
        newElementItem.style.backgroundColor = getRandomHexColor();
        
      boxes.append(newElementItem);
        //console.dir(boxes);
      }
  }
  
  function destroyBoxes() {
    boxes.innerHTML = ''; 
  }
  
  destroyButton.addEventListener('click', destroyBoxes);
}

buttonCreate.addEventListener(`click`, inputSomeNumber);



