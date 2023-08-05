import './style.css';
import mkEle from './mkEle.js';
console.log('hello from index');

const header = document.createElement('h1');
header.innerHTML = 'Logo';
document.body.appendChild(header);

const header2 = mkEle('h1', 'Another');
document.body.appendChild(header2);