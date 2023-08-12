
import route from './router.js';
import contentDiv from './content.js';
import homeDiv from './home.js';
import menuDiv from './menu.js';
import contactDiv from './contact.js';

const header = document.createElement('div');
header.setAttribute('id', 'header');


//logo
const coldText = document.createElement('h2');
coldText.classList.add('coldPressSub');
coldText.setAttribute('id', 'coldText');
coldText.innerHTML='COLD';
const pressText = document.createElement('h2');
pressText.classList.add('coldPressSub');
pressText.setAttribute('id','pressText');
pressText.innerHTML="PRESS";
const logoSubDiv = document.createElement('div');
logoSubDiv.setAttribute('id','logoSubDiv');
logoSubDiv.appendChild(coldText);
logoSubDiv.appendChild(pressText);
const kitchenText = document.createElement('h1');
kitchenText.setAttribute('id','kitchenText');
kitchenText.innerHTML='KITCHEN';
const logoDiv = document.createElement('div');
logoDiv.setAttribute('id','logoDiv');
logoDiv.appendChild(logoSubDiv);
logoDiv.appendChild(kitchenText);

header.appendChild(logoDiv);
//navigation bar

const homeBtn = document.createElement('li');
homeBtn.innerHTML= 'Home';
const menuBtn = document.createElement('li');
menuBtn.innerHTML= "Menu";
const contactBtn = document.createElement('li');
contactBtn.innerHTML = 'Contact';


const navUl = document.createElement('ul');
navUl.appendChild(homeBtn);
navUl.appendChild(menuBtn);
navUl.appendChild(contactBtn);
const navBar = document.createElement('nav');
navBar.setAttribute('id','navBar');
navBar.appendChild(navUl);


header.appendChild(navBar);

homeBtn.addEventListener('click', ()=>route(contentDiv, homeDiv));
menuBtn.addEventListener('click', ()=>route(contentDiv, menuDiv));
contactBtn.addEventListener('click', ()=>route(contentDiv, contactDiv));

export default header;