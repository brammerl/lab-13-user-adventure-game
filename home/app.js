const nav = document.getElementById('tasks');
import actions from '../data./places.js';
import { createLink } from './functions.js';
import { getUser } from '../common/utils.js';

function loadHome() {
    const user = getUser();
    actions.forEach(choice => {
        let liveLink = createLink(choice);
        nav.append(liveLink);

        if (user.completed[choice.id]) {
            liveLink.style.disabled;
        }
    });

}

loadHome();