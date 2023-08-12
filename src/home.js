import InfoImg from './img/glass-green-apple-healthy-smoothie-put-fresh-green-apples.jpg'
import HeroImg from './img/k15-photos-VOdONjAP_Lk-unsplash.jpg'
const homeDiv = document.createElement("div");
homeDiv.setAttribute("id", "homeDiv");

const heroSection = document.createElement("section");
heroSection.setAttribute('id', 'heroSection');
heroSection.classList.add('homeSections')
const heroImg = new Image();
heroImg.src = HeroImg;
heroImg.classList.add('homeImg');
heroImg.classList.add('stacked-grid');
const heroFilter = document.createElement('Div');
heroFilter.setAttribute('id', 'heroFilter');
heroFilter.classList.add('stacked-grid');
const heroTextDiv = document.createElement("hgroup");
heroTextDiv.setAttribute('id', 'heroTextDiv');
heroTextDiv.classList.add('stacked-grid')
const heroText = document.createElement("h1");
const heroText2 = document.createElement("h1");
heroText.classList.add("heroText");
heroText2.classList.add("heroText");
const heroTextSub = document.createElement("p");
heroText.innerHTML = "Should Healthy";
heroText2.innerHTML = "Taste So Good?";
heroTextSub.innerHTML = "(Yes!)";
heroTextSub.setAttribute("id", "heroTextSub");
heroTextDiv.appendChild(heroText);
heroTextDiv.appendChild(heroText2);
heroTextDiv.appendChild(heroTextSub);
heroSection.appendChild(heroImg);
heroSection.appendChild(heroFilter);
heroSection.appendChild(heroTextDiv);
homeDiv.appendChild(heroSection);


const infoSection = document.createElement("section");
infoSection.setAttribute("id", "infoSection");
infoSection.classList.add('homeSections');
const infoImg = new Image();
infoImg.src = InfoImg;
infoImg.classList.add('homeImg');
infoImg.classList.add('stacked-grid');
const infoFilter = document.createElement('div');
infoFilter.setAttribute('id', 'infoFilter');
infoFilter.classList.add('stacked-grid');
const infoText = document.createElement('p');
infoText.setAttribute('id','infoText');
infoText.classList.add('stacked-grid');
infoText.innerHTML =
  "Whether you are looking to supplement your diet with essential nutrients, jump start your cleanse or boost your immune system, we have a recipe that’s right for you!";
infoSection.appendChild(infoImg);
infoSection.appendChild(infoFilter);
infoSection.appendChild(infoText);
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
