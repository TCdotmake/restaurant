import FB from './img/fb_W.png';
import IN from './img/in_W.png';
import TW from './img/tw_W.png';

const contactDiv = document.createElement('div');
contactDiv.setAttribute('id', 'contactDiv');


//sign up div
const signUpDiv = document.createElement('div');
signUpDiv.setAttribute('id', 'signUpDiv');

const textDiv = document.createElement('div');
textDiv.setAttribute('id', 'textDiv');
textDiv.classList.add('stacked-grid');

//sign up header
const signUpHeader = document.createElement('h1');
signUpHeader.innerHTML = "Let's get Connected!";
signUpHeader.classList.add('heroText');
signUpHeader.setAttribute('id', 'signUpHeader');

// signUpDiv.appendChild(signUpHeader);

//sign up sub
const signUpSub = document.createElement('p');
signUpSub.innerHTML = 'Get updates on new items and special events';
signUpSub.classList.add('contactSub');

// signUpDiv.appendChild(signUpSub);

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
// signUpDiv.appendChild(emailForm);

textDiv.appendChild(signUpHeader);
textDiv.appendChild(signUpSub);
textDiv.appendChild(emailForm);
// signUpDiv.appendChild(fruitImg);
signUpDiv.appendChild(textDiv);
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
hourSub.innerHTML='Hours';
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



//contact
const detailsDiv = document.createElement('div');
detailsDiv.classList.add('contactDiv');
detailsDiv.classList.add('smallText');
const detailSub = document.createElement('h3');
detailSub.classList.add('contactSub');
detailSub.innerHTML = 'Contact';
detailsDiv.appendChild(detailSub);

const addressArr = [
    '(123) 456-7890',
    'info@cpk.com',
    '501 NE LAKE DR',
    'Lake City, FL 32055',
];

const contactInfo = document.createElement('div');
contactInfo.setAttribute('id', 'addressDiv');
for(let n of addressArr){
    const p = document.createElement('p');
    p.innerHTML = n;
    contactInfo.appendChild(p);
}
detailsDiv.appendChild(contactInfo);


contactInfoDiv.appendChild(detailsDiv);
contactInfoDiv.appendChild(hourDiv);
//social
const socialDiv = document.createElement('div');
socialDiv.classList.add('contactDiv');
const socialSub = document.createElement('h3');
socialSub.classList.add('contactSub');
socialSub.innerHTML = 'Stay Connected';
socialDiv.appendChild(socialSub);

const iconDiv = document.createElement('div');
iconDiv.setAttribute('id', 'iconDiv');

const fb = new Image();
fb.src = FB;
fb.classList.add('icon');
iconDiv.appendChild(fb);

const tw = new Image();
tw.src = TW;
tw.classList.add('icon');
iconDiv.appendChild(tw);

const ins = new Image();
ins.src = IN;
ins.classList.add('icon');
iconDiv.appendChild(ins);
socialDiv.appendChild(iconDiv);



// contactInfoDiv.appendChild(socialDiv);

contactDiv.appendChild(contactInfoDiv);
contactDiv.appendChild(socialDiv);

export default contactDiv;