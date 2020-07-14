let username = document.getElementById('username');
let number = document.getElementById('number');
let passcode = document.getElementById('passcode');
let date = document.getElementById('date');

const formtosumbit = document.getElementById('form');
formtosumbit.addEventListener('submit', logSumbit);

function logSumbit(event) {
event.preventDefault();
console.log('event', event.target.name.value);
outputusername.innerHTML = event.target.name.value;
outputnumber.innerHTML = event.target.name.value;
outputpasscode.innerHTML = event.target.name.value;
outputdate.innerHTML = event.target.name.value;

}