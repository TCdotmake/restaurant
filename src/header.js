import route from "./router.js";

import LogoImg2 from './img/Screenshot 2023-08-13 at 11.11.57 AM.png'
const header = document.createElement("div");
header.setAttribute("id", "header");

//logo img d
const logoImg = new Image();
logoImg.src = LogoImg2;
logoImg.setAttribute("id", "logoImg");

header.appendChild(logoImg);

//navigation btn
const homeBtn = document.createElement("li");
homeBtn.innerHTML = "Home";
homeBtn.setAttribute("id", "homeBtn");
homeBtn.classList.add("selected"); //home highlighted on page load
const menuBtn = document.createElement("li");
menuBtn.innerHTML = "Menu";
menuBtn.setAttribute("id", "menuBtn");
const contactBtn = document.createElement("li");
contactBtn.innerHTML = "Contact";
contactBtn.setAttribute("id", "contactBtn");
const btnArr = [homeBtn, menuBtn, contactBtn];
for (let n of btnArr) {
  n.classList.add("navBtn");
}
//navigation bar
const navUl = document.createElement("ul");
navUl.appendChild(homeBtn);
navUl.appendChild(menuBtn);
navUl.appendChild(contactBtn);
const navBar = document.createElement("nav");
navBar.setAttribute("id", "navBar");
navBar.appendChild(navUl);
header.appendChild(navBar);

//event listeners for navigation buttons
homeBtn.addEventListener("click", route);
menuBtn.addEventListener("click", route);
contactBtn.addEventListener("click", route);

export default header;
