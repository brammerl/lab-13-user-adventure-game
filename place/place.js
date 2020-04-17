import { renderPlace } from './renderPlace.js';
import { renderUserData } from '../common/utils.js';
import { makeChoice } from './makeChoice.js';

renderPlace();
renderUserData();
makeChoice();

const button = document.getElementById('homeButton');
button.addEventListener('click', () => {
    window.location.replace('../home/index.html');
});
