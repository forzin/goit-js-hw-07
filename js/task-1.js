const ourCategories = document.querySelectorAll(`.item`);

console.log(`Number of categories: ${ourCategories.length}`);


const listItem = ourCategories.forEach(list => {
    console.log(`Category: ${list.firstElementChild.textContent}`);
    
    const listNames = list.querySelectorAll(`ul li`);
    console.log(`Elements: ${listNames.length}`);
});

