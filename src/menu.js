import juiceObjArr from "./juiceRecipe";
import sweetArr from "./sweet";
import savoryArr from "./savory";
const menuDiv = document.createElement("div");
menuDiv.setAttribute("id", "menuDiv");

//juice section
const juiceMenuDiv = document.createElement("div");
juiceMenuDiv.setAttribute("id", "juiceMenu");
juiceMenuDiv.classList.add("menuSection");
const juiceSubHeading = document.createElement("h2");
juiceSubHeading.innerHTML = "Cold Pressed Juice";
juiceSubHeading.classList.add("menuSubHeading");
juiceMenuDiv.appendChild(juiceSubHeading);
const juiceMenuList = document.createElement("ul");
juiceMenuList.classList.add("menuList");
juiceMenuDiv.appendChild(juiceMenuList);
for (let obj of juiceObjArr) {
  const menuItem = document.createElement("li");
  menuItem.classList.add("menuItem");

  //item name
  const itemName = document.createElement("div");
  itemName.innerHTML = obj.name;
  itemName.classList.add("itemName");
  menuItem.appendChild(itemName);

  //list of ingredients
  const ingredientList = document.createElement("ul");
  ingredientList.classList.add("ingredientList");
  for (let n of obj.ingredients) {
    const ingredient = document.createElement("li");
    ingredient.innerHTML = n;
    ingredient.classList.add("ingredient");
    ingredientList.appendChild(ingredient);
  }
  menuItem.appendChild(ingredientList);

  //description
  const itemDescrip = document.createElement("p");
  itemDescrip.innerHTML = obj.description;
  itemDescrip.classList.add("itemDescrip");
  menuItem.appendChild(itemDescrip);

  juiceMenuList.appendChild(menuItem);
}
menuDiv.appendChild(juiceMenuDiv);

function populateMenu(arr, dom) {
  for (let obj of arr) {
    const menuItem = document.createElement("li");
    menuItem.classList.add("menuItem");

    //item name
    const itemName = document.createElement("div");
    itemName.innerHTML = obj.name;
    itemName.classList.add("itemName");
    menuItem.appendChild(itemName);
    //description
    const itemDescrip = document.createElement("p");
    itemDescrip.innerHTML = obj.desc;
    itemDescrip.classList.add("itemDescrip");
    menuItem.appendChild(itemDescrip);

    dom.appendChild(menuItem);
  }
}

//sweet section
const sweetMenuDiv = document.createElement("div");
sweetMenuDiv.classList.add("menuSection");
const sweetSubHead = document.createElement("h2");
sweetSubHead.classList.add("menuSubHeading");
sweetSubHead.innerHTML = "Sweets";
sweetMenuDiv.appendChild(sweetSubHead);
const sweetMenuList = document.createElement("ul");
sweetMenuList.classList.add("menuList");
populateMenu(sweetArr,sweetMenuList);
sweetMenuDiv.appendChild(sweetMenuList);
menuDiv.appendChild(sweetMenuDiv);
//savory
const savoryMenuDiv = document.createElement("div");
savoryMenuDiv.classList.add("menuSection");
const savorySubHead = document.createElement("h2");
savorySubHead.classList.add("menuSubHeading");
savorySubHead.innerHTML = "Savory";
savoryMenuDiv.appendChild(savorySubHead);
const savoryMenuList = document.createElement("ul");
savoryMenuList.classList.add("menuList");
populateMenu(savoryArr,savoryMenuList);
savoryMenuDiv.appendChild(savoryMenuList);
menuDiv.appendChild(savoryMenuDiv);

export default menuDiv;
