function getElementWidth(content, padding, border) {

    const changeNumber = Number.parseFloat(content);
    const changeNumber1 = Number.parseFloat(padding);
    const changeNumber2 = Number.parseFloat(border);

    const totalNumber = changeNumber + (changeNumber1 + changeNumber2) * 2;
    
    return totalNumber;
}



console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200