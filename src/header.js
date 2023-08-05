import mkEle from './mkEle.js';

const header = document.createElement('div');
header.setAttribute('id', 'header');

//place holder for logo
const logo = mkEle('h1', 'Logo Placeholder');
const logoDiv = mkEle('div', logo);

//navigation bar
const navArr = [mkEle('li', 'Home'), mkEle('li', 'Menu'), mkEle('li', 'Contact')];
const navUl = document.createElement('ul');
for(let n of navArr){
    navUl.appendChild(n);
}
const navBar = document.createElement('nav');
navBar.setAttribute('id','navBar');
navBar.appendChild(navUl);

header.appendChild(logo);
header.appendChild(navBar);

export default header;