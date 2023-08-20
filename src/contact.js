

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
signUpSub.setAttribute('id', 'signUpSub');

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

export default contactDiv;