import './style.css';
import mkEle from './mkEle.js';
import header from './header.js';

const mainDiv = document.createElement('div');
mainDiv.setAttribute('id', 'main');
document.body.appendChild(mainDiv);
mainDiv.appendChild(header);