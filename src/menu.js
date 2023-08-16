import juiceObjArr from "./juiceRecipe";
import sweetArr from "./sweet";
import savoryArr from "./savory";
import Drinks from './img/brooke-lark-HjWzkqW1dgI-unsplash.jpg';
import Baked from './img/blake-carpenter-7sMvmabgXAo-unsplash.jpg';
import Sandwich from './img/pixzolo-photography-BiWb1Y8wpZk-unsplash.jpg';
const menuDiv = document.createElement("div");
menuDiv.setAttribute("id", "menuDiv");

const bgDiv1 = document.createElement('div');
const bgDiv2 = document.createElement('div');
const bgDiv3 = document.createElement('div');
bgDiv1.classList.add('bgDiv');
bgDiv2.classList.add('bgDiv');
bgDiv3.classList.add('bgDiv');
bgDiv1.setAttribute('id','bgDiv1');
bgDiv2.setAttribute('id','bgDiv2');
bgDiv3.setAttribute('id','bgDiv3');
// const drinkImg = new Image();
// drinkImg.src=Drinks;
// drinkImg.classList.add('homeImg');
// drinkImg.setAttribute('id','drinkImg');
// menuDiv.appendChild(drinkImg);
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

bgDiv1.appendChild(juiceMenuDiv);
menuDiv.appendChild(bgDiv1);

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
bgDiv2.appendChild(sweetMenuDiv);
menuDiv.appendChild(bgDiv2);
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
bgDiv3.appendChild(savoryMenuDiv);
menuDiv.appendChild(bgDiv3);

export default menuDiv;
