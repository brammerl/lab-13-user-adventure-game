import actions from '../data/places.js';
import { findById } from '../common/utils.js';

export const makeChoice = () => {
    const radio = document.querySelectorAll('input[type=radio');
    const place = new URLSearchParams(window.location.search);
    const placeId = place.get('id');
    const obj = findById(actions, placeId);
    const choiceArray = obj.choices;

    radio.forEach(radioTag => {
        radioTag.addEventListener('click', () => {
            const x = event.target;
            choiceArray.forEach(choice => {
                if (choice.id === x.id) {
                    const image = document.getElementById('photo');
                    const intro = document.getElementById('intro');
                    image.src = `../assets/flowers/${choice.img}`;
                    intro.textContent = choice.description;
                }
            });
        });
    });
};