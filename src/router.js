import contentDiv from "./content";
import homeDiv from "./home";
import menuDiv from "./menu";
import contactDiv from "./contact";

//change tab focus
function changeTabColor(event){
    const parent = event.currentTarget.parentNode;
    for (let child of parent.children) {
      child.classList.remove("selected");
    }
    event.currentTarget.classList.add("selected");
}

//empty and repopulate content
function route(event) {
  changeTabColor(event);
  if (contentDiv.hasChildNodes) {
    while (contentDiv.firstChild) {
      contentDiv.removeChild(contentDiv.lastChild);
    }
  }
  const id = event.target.id;
  if (id == "homeBtn") {
    contentDiv.appendChild(homeDiv);
  } else if (id == "menuBtn") {
    contentDiv.appendChild(menuDiv);
  } else if (id == "contactBtn") {
    contentDiv.appendChild(contactDiv);
  }
}

export default route;
