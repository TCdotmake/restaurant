import HeroImg from "./img/hero.jpg";

const homeDiv = document.createElement("div");
homeDiv.setAttribute("id", "homeDiv");

const heroSection = document.createElement("section");
const heroTextDiv = document.createElement("hgroup");
const heroText = document.createElement("h1");
const heroText2 = document.createElement("h1");
heroText.classList.add("heroText");
heroText2.classList.add("heroText");
const heroTextSub = document.createElement("p");
heroText.innerHTML = "Should Healthy";
heroText2.innerHTML = "Taste Sooooo Good?";
heroTextSub.innerHTML = "(Yes!)";
heroTextSub.setAttribute("id", "heroTextSub");
heroTextDiv.appendChild(heroText);
heroTextDiv.appendChild(heroText2);
heroTextDiv.appendChild(heroTextSub);
heroSection.appendChild(heroTextDiv);
homeDiv.appendChild(heroSection);

const infoSection = document.createElement("section");
infoSection.setAttribute("id", "infoSection");
infoSection.innerHTML =
  "Whether you are looking to supplement your diet with essential nutrients, jump start your cleanse or boost your immune system, we have a recipe that’s right for you";
homeDiv.appendChild(infoSection);
const infoSection2 = document.createElement("section");
infoSection2.setAttribute("id", "infoSection2");
const headerArr = ["Delicious", "No Bull"];

const createList = (arr) => {
  const list = document.createElement("ul");
  list.classList.add("infoList");
  for (let n of arr) {
    const item = document.createElement("li");
    item.innerHTML = n;
    list.appendChild(item);
  }
  return list;
};

const noBullArr = [
  "No sugar added",
  "No preservatives",
  "Not from concentrate",
  "Non-GMO",
  "Gluten Free",
];

const deliciousArr = [
  "Fresh, seasonal fruit",
  "Juiced to order",
  "Pulp free",
  "Crisp, smooth and hydrating",
];

const infoContent = [createList(deliciousArr), createList(noBullArr)];

for (let n in headerArr) {
  const infoDiv = document.createElement("div");
  infoDiv.classList.add("infoDiv");
  const infoHeading = document.createElement("h3");
  infoHeading.classList.add("infoHeading");
  infoHeading.innerHTML = headerArr[n];
  infoDiv.appendChild(infoHeading);
  infoDiv.appendChild(infoContent[n]);
  infoSection2.appendChild(infoDiv);
}
homeDiv.appendChild(infoSection2);

export default homeDiv;
