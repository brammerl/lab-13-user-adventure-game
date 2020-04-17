import createUser from './createUser.js';
import images from './data/images.js';
import pushLocalStorage from './pushLocalStorage.js';

const button = document.getElementById('user');
const userInput = document.getElementById('user');


button.addEventListener('submit', function(event){
    event.preventDefault();
    const userInfo = new FormData(userInput);
    const profile = createUser(userInfo);

    const stringed = JSON.stringify(profile);

    pushLocalStorage('user', stringed);


    window.location.href = './place/?id=newSeasons';
});
const radio = document.querySelectorAll('input[type=radio]');

radio.forEach(radioTag => {
    radioTag.addEventListener('click', () => {
        let url;
        const x = event.target;
        images.forEach(pic => {
            if (x.id === pic.id) {
                url = pic.src;
            }
        });
        localStorage.setItem('icon', url);
    });
}); 
