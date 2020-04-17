import { findById } from '../common/utils.js';
import actions from '../data/places.js';

export const renderPlace = () => {

    const place = new URLSearchParams(window.location.search);
    const placeId = place.get('id');
    const title = document.getElementById('placeName');
    const image = document.getElementById('photo');
    const intro = document.getElementById('intro');
    const formArea = document.getElementById('answers');
    const button = document.createElement('button');
    const object = findById(actions, placeId);

    
    title.textContent = object.title;
    image.src = object.img;
    intro.textContent = object.description;
    button.textContent = 'Enter';
    
    const choiceArray = object.choices;

    choiceArray.forEach(choice => {
        const input = document.createElement('input');
        const label = document.createElement('label');

        input.type = 'radio';
        input.name = 'choice';
        input.id = choice.id;
        input.class = 'dynamicImage';

        label.textContent = `${choice.id}`;
        label.appendChild(input);

        formArea.appendChild(label);
    });
};

