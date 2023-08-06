import juiceObjArr from "./juiceRecipe";
const menuDiv = document.createElement("div");
menuDiv.setAttribute("id", "menuDiv");


const juiceMenuDiv = document.createElement('div');
juiceMenuDiv.setAttribute('id', 'juiceMenu');
juiceMenuDiv.classList.add('menuSection');
const juiceSubHeading = document.createElement('h2');
juiceSubHeading.innerHTML = 'Cold Pressed Juice';
juiceSubHeading.classList.add('menuSubHeading');
juiceMenuDiv.appendChild(juiceSubHeading);
const juiceMenuList = document.createElement('ul');
juiceMenuDiv.appendChild(juiceMenuList);
for(let obj of juiceObjArr){
    const menuItem = document.createElement('li');
    menuItem.classList.add('menuItem');
    
    //item name
    const itemName = document.createElement('h3');
    itemName.innerHTML = obj.name;
    itemName.classList.add('itemName');
    menuItem.appendChild(itemName);
    
    //list of ingredients
    const ingredientList = document.createElement('ul');
    ingredientList.classList.add('ingredientList');
    for(let n of obj.ingredients){
        const ingredient = document.createElement('li');
        ingredient.innerHTML = n;
        ingredient.classList.add('ingredient');
        ingredientList.appendChild(ingredient);
    }
    menuItem.appendChild(ingredientList);

    //description
    const itemDescrip = document.createElement('div');
    itemDescrip.innerHTML = obj.description;
    itemDescrip.classList.add('itemDescrip');
    menuItem.appendChild(itemDescrip);

    juiceMenuList.appendChild(menuItem);
}
menuDiv.appendChild(juiceMenuDiv);
export default menuDiv;
