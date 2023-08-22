import './style.css';
import header from './header.js';
import homeDiv from './home';
import contentDiv from './content';
import footerDiv from './footer';

const mainDiv = document.createElement('div');
mainDiv.setAttribute('id', 'main');
document.body.appendChild(mainDiv);

mainDiv.appendChild(header);
mainDiv.appendChild(contentDiv);
contentDiv.appendChild(homeDiv);

mainDiv.append(footerDiv);