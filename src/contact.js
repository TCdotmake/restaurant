import FB from './img/fb_W.png';
import IN from './img/in_W.png';
import TW from './img/tw_W.png';

const contactDiv = document.createElement('div');
contactDiv.setAttribute('id', 'contactDiv');


//sign up div
const signUpDiv = document.createElement('div');
signUpDiv.setAttribute('id', 'signUpDiv');

//sign up header
const signUpHeader = document.createElement('h1');
signUpHeader.innerHTML = "Let's get Connected!";
signUpHeader.classList.add('heroText');
signUpHeader.setAttribute('id', 'signUpHeader');

signUpDiv.appendChild(signUpHeader);

//sign up sub
const signUpSub = document.createElement('p');
signUpSub.innerHTML = 'Get updates on new items and special events';
signUpSub.classList.add('contactSub');

signUpDiv.appendChild(signUpSub);

//sign up email
const emailForm = document.createElement('form');

const emailDiv = document.createElement('div');
emailDiv.setAttribute('id','emailDiv');

const label = document.createElement('label');
label.innerHTML='email:';
label.setAttribute('for','email');
label.setAttribute('id','label');

const emailInput = document.createElement('input');
emailInput.setAttribute('type', 'email');
emailInput.setAttribute('id', 'email');
emailInput.setAttribute('name', 'email');

emailDiv.appendChild(label);
emailDiv.appendChild(emailInput);

const submit = document.createElement('input');
submit.setAttribute('type','submit');
submit.setAttribute('value', 'Subscribe');
submit.setAttribute('id', 'submit');

emailForm.appendChild(emailDiv);
emailForm.appendChild(submit);
signUpDiv.appendChild(emailForm);

contactDiv.appendChild(signUpDiv); 

// contact info container
const contactInfoDiv = document.createElement('div');
contactInfoDiv.setAttribute('id', "contactInfoDiv");

// hours
const dayArr = [
    'Mon - Fri:',
    'Saturday:',
    'Sunday:'
];

const hourArr = [
    '7AM - 4PM',
    '7AM - 6PM',
    '7AM - 2PM'
];

const hourDiv = document.createElement('div');
hourDiv.classList.add('contactDiv');
// sub heading
const hourSub = document.createElement('h3');
hourSub.classList.add('contactSub');
hourSub.innerHTML='Opening Hours';
hourDiv.appendChild(hourSub);

// hour list
const hourList = document.createElement('ul');

for(let i in dayArr){
    const item = document.createElement('li');
    item.classList.add('contactItem');
    item.classList.add('smallText');
    const day = document.createElement('p');
    day.innerHTML=dayArr[i];
    const hour = document.createElement('p');
    hour.innerHTML=hourArr[i];
    item.appendChild(day);
    item.appendChild(hour);
    hourList.append(item);
}
hourDiv.appendChild(hourList);

contactInfoDiv.appendChild(hourDiv);

//contact
const detailsDiv = document.createElement('div');
detailsDiv.classList.add('contactDiv');
detailsDiv.classList.add('smallText');
const detailSub = document.createElement('h3');
detailSub.classList.add('contactSub');
detailSub.innerHTML = 'Contact';
detailsDiv.appendChild(detailSub);
const phone = document.createElement('p');
phone.innerHTML = '(123) 456-7890';
detailsDiv.appendChild(phone);
const email = document.createElement('p');
email.innerHTML = 'info@coldpressedkitchen.com';
detailsDiv.appendChild(email);
const address1 = document.createElement('p');
address1.innerHTML = '915 Wiegand Road';
detailsDiv.appendChild(address1);
const address2 = document.createElement('p');
address2.innerHTML = 'Port Mariettahaven, NE 60448';
detailsDiv.appendChild(address2);

contactInfoDiv.appendChild(detailsDiv);

//social
const socialDiv = document.createElement('div');
socialDiv.classList.add('contactDiv');
const socialSub = document.createElement('h3');
socialSub.classList.add('contactSub');
socialSub.innerHTML = 'Stay Connected';
socialDiv.appendChild(socialSub);

// const fbIcon = document.createElement('object');
// fbIcon.setAttribute('type','image/svg+xml');
// fbIcon.setAttribute('data', './img/facebook.svg');
// fbIcon.classList.add('icon');
// socialDiv.appendChild(fbIcon);

const fb = new Image();
fb.src = FB;
fb.classList.add('icon');
socialDiv.appendChild(fb);

const tw = new Image();
tw.src = TW;
tw.classList.add('icon');
socialDiv.appendChild(tw);

const ins = new Image();
ins.src = IN;
ins.classList.add('icon');
socialDiv.appendChild(ins);


contactInfoDiv.appendChild(socialDiv);

contactDiv.appendChild(contactInfoDiv);


export default contactDiv;