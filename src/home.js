import InfoImg from "./img/green.jpg";
import HeroImg from "./img/red.jpg";
import DetailImg from "./img/pom.jpg";
import NoAddImg from './img/waterMelon.jpg'
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

const noAddArr = [
  "No sugar added",
  "No preservatives",
  "Not from concentrate",
  "Non-GMO",
  "Gluten Free",
];

const simpleArr = [
  "Fresh, seasonal fruit",
  "Juiced to order",
  "Pulp free",
  "Crisp, smooth and hydrating",
];

const homeDiv = document.createElement("div");
homeDiv.setAttribute("id", "homeDiv");

//hero section
const heroSection = document.createElement("section");
heroSection.classList.add("homeSections");
//  image
const heroImg = new Image();
heroImg.src = HeroImg;
heroImg.classList.add("homeImg");
heroImg.classList.add("stacked-grid");
//  filter
const heroFilter = document.createElement("Div");
heroFilter.setAttribute("id", "heroFilter");
heroFilter.classList.add("stacked-grid");
//  text
const heroTextDiv = document.createElement("hgroup");
heroTextDiv.setAttribute("id", "heroTextDiv");
heroTextDiv.classList.add("stacked-grid");
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
//  assembly
heroSection.appendChild(heroImg);
heroSection.appendChild(heroFilter);
heroSection.appendChild(heroTextDiv);
homeDiv.appendChild(heroSection);

//info section
const infoSection = document.createElement("section");
infoSection.classList.add("homeSections");
//  image
const infoImg = new Image();
infoImg.src = InfoImg;
infoImg.classList.add("homeImg");
infoImg.classList.add("stacked-grid");
// filter
const infoFilter = document.createElement("div");
infoFilter.setAttribute("id", "infoFilter");
infoFilter.classList.add("stacked-grid");
//  text
const infoText = document.createElement("p");
infoText.setAttribute("id", "infoText");
infoText.classList.add("stacked-grid");
infoText.innerHTML =
  "Whether you are looking to supplement your diet with essential nutrients, jump start your cleanse or boost your immune system, we have a recipe that’s right for you!";
//  assembly
infoSection.appendChild(infoImg);
infoSection.appendChild(infoFilter);
infoSection.appendChild(infoText);
homeDiv.appendChild(infoSection);

//Details

const detailSection = document.createElement('section');
detailSection.classList.add('homeSections');
detailSection.setAttribute('id','detailSection');
//  img
const detailImg = new Image();
detailImg.src=DetailImg;
detailImg.classList.add('homeImg');
detailImg.classList.add('stacked-grid')
// filter
const detailFilter = document.createElement('div');
detailFilter.setAttribute('id', 'detailFilter');
// text
const detailTextDiv = document.createElement('div');
detailTextDiv.setAttribute('id', 'detailTextDiv');
const detailSub = document.createElement('h2');
detailSub.classList.add('homeSub');
detailSub.innerHTML='Simple, Pure Joy';
detailTextDiv.appendChild(detailSub);
detailTextDiv.appendChild(createList(simpleArr));
//  assembly
detailSection.appendChild(detailImg);
detailSection.appendChild(detailFilter);
detailSection.appendChild(detailTextDiv);
homeDiv.append(detailSection);

//noAdditive
const noAddSection = document.createElement('section');
noAddSection.setAttribute('id', 'noAddSection');
noAddSection.classList.add('homeSections')
//  img
const noAddImg = new Image();
noAddImg.src= NoAddImg;
noAddImg.classList.add('homeImg');
noAddImg.setAttribute('id','noAddImg');
//  filter
const noAddFilter= document.createElement('div');
noAddFilter.setAttribute('id','noAddFilter');
//  text
const noAddTextDiv = document.createElement('div');
noAddTextDiv.setAttribute('id', 'noAddTextDiv');
const noAddSub = document.createElement('h2');
noAddSub.classList.add('homeSub');
noAddSub.innerHTML='No Additives';
noAddTextDiv.appendChild(noAddSub);
const noAddList = createList(noAddArr);
noAddList.setAttribute('id','noAddList');
noAddTextDiv.appendChild(noAddList);
//  assembly
noAddSection.appendChild(noAddImg);
noAddSection.appendChild(noAddFilter);
noAddSection.appendChild(noAddTextDiv);
homeDiv.appendChild(noAddSection);



export default homeDiv;
