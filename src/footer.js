import GH from './img/gh_W.png';
const footerDiv = document.createElement('div');
footerDiv.setAttribute('id','footerDiv');
footerDiv.classList.add('smallText');
const copy = document.createElement('p');
copy.innerHTML = 'Tommy Chen © 2023';

const gh = new Image();
gh.src = GH;
gh.classList.add('icon');
const ghLink = document.createElement('a');
ghLink.setAttribute('href', 'https://github.com/TCdotmake/resturantV2');
ghLink.appendChild(gh);

const copyDiv = document.createElement('div');
copyDiv.setAttribute('id', 'copyDiv');


copyDiv.appendChild(copy);
copyDiv.appendChild(ghLink);
footerDiv.appendChild(copyDiv);
export default footerDiv;