const nav = document.getElementById('tasks');
import actions from '../data/places.js';
import { createLink } from './createLink.js';
import { renderUserData } from '../common/utils.js';


function loadHome() {
    renderUserData();

    actions.forEach(choice => {
        const liveLink = createLink(choice);
        const br = document.createElement('br');
        liveLink.appendChild(br);
        nav.append(liveLink);
    });

    
}

loadHome();