import { renderPlace } from './renderPlace.js';
import { renderUserData } from '../common/utils.js';
import { makeChoice } from './makeChoice.js';
import actions from '../data/places.js';
import { findById } from '../common/utils.js';

renderPlace();
renderUserData();
makeChoice();

const place = new URLSearchParams(window.location.search);
const id = place.get('id');
const obj = findById(actions, id);
const user = JSON.parse(localStorage.getItem('user'));
const choice = obj.choices;

// choice.forEach(action => {

// });

const updateStats = (choice, placeId, user) => {

    user.flowers += choice.amount;
    user.completed[placeId] = true;
};

updateStats(choice, id, user);


const button = document.getElementById('homeButton');
button.addEventListener('click', () => {
    window.location.replace('../home/index.html');
});
