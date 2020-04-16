import createUser from './createUser.js';
import pushLocalStorage from './pushLocalStorage.js';

const button = document.getElementById('user');

const userInput = document.getElementById('user');
let userProfile = [];


button.addEventListener('submit', function(event){

    console.log('ugh');
    event.preventDefault();
    const userInfo = new FormData(userInput);
    const profile = createUser(userInfo);
    
    userProfile.push(profile);
    const stringed = JSON.stringify(userProfile);

    pushLocalStorage('user', stringed);


    window.location.href = './home/index.html';
});