import HeroImg from './img/hero.jpg';

const homeDiv = document.createElement('div');
homeDiv.setAttribute('id', 'homeDiv');

// const heroImg = new Image();
// heroImg.src = HeroImg;
// heroImg.setAttribute('id', 'heroImg');
// homeDiv.appendChild(heroImg);

const heroSection = document.createElement('section');
const heroTextDiv = document.createElement('hgroup');
const heroText = document.createElement('h1');
const heroText2 = document.createElement('h1');
heroText.classList.add('heroText');
heroText2.classList.add('heroText');
const heroTextSub = document.createElement('p');
heroText.innerHTML  = 'Should Healthy';
heroText2.innerHTML = 'Taste Sooooo Good?';
heroTextSub.innerHTML = '(Yes!)';
heroTextDiv.appendChild(heroText);
heroTextDiv.appendChild(heroText2);
heroTextDiv.appendChild(heroTextSub);
heroSection.appendChild(heroTextDiv);
homeDiv.appendChild(heroSection);


export default homeDiv;