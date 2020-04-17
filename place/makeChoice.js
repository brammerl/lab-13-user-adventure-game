import actions from '../data/places.js';
import { findById, updateUser, getUser, renderUserData } from '../common/utils.js';

export const makeChoice = () => {
    const radio = document.querySelectorAll('input[type=radio');
    const place = new URLSearchParams(window.location.search);
    const placeId = place.get('id');
    const obj = findById(actions, placeId);
    const choiceArray = obj.choices;
    const user = getUser();
    console.log(user);

    radio.forEach(radioTag => {
        radioTag.addEventListener('click', () => {
            const x = event.target;
            choiceArray.forEach(choice => {
                
                if (choice.id === x.id) {
                    const image = document.getElementById('photo');
                    const intro = document.getElementById('intro');
                    image.src = `../assets/flowers/${choice.img}`;
                    intro.textContent = choice.description;
                    user.count = user.count + Number(choice.amount);
                    user.completed[placeId] = true;
                }
            });
            updateUser(user);
            renderUserData();
        });
    });
};