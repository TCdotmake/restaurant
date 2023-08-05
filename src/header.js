
import route from './router.js';
import contentDiv from './content.js';
import homeDiv from './home.js';
import menuDiv from './menu.js';
import contactDiv from './contact.js';

const header = document.createElement('div');
header.setAttribute('id', 'header');

//place holder for logo

const logo = document.createElement('h1');
logo.innerHTML = 'Logo Placeholder';

const logoDiv = document.createElement('div');
logoDiv.innerHTML= logo;
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

header.appendChild(logo);
header.appendChild(navBar);

homeBtn.addEventListener('click', ()=>route(contentDiv, homeDiv));
menuBtn.addEventListener('click', ()=>route(contentDiv, menuDiv));
contactBtn.addEventListener('click', ()=>route(contentDiv, contactDiv));

export default header;