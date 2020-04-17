export const getUser = () => {
    const userData = JSON.parse(localStorage.getItem('user'));
    return userData;
};

export const getIcon = () => {
    const icon = localStorage.getItem('icon');
    return icon;
};



export const updateUser = (userData) => {
    const stringed = JSON.stringify(userData);
    localStorage.setItem('user', stringed);
};

export const findById = (array, id) => {
    for (let index = 0; index < array.length; index++) {
        const item = array[index];
        if (item.id === id) {
            return item;
        }
    }

    return null;
};

export const renderUserData = () => {

    const avatar = document.getElementById('avatar');
    const name = document.getElementById('name');
    const count = document.getElementById('count');
    
    const user = getUser();
    const icon = getIcon();

    avatar.src = icon;
    name.textContent = user.id;
    count.textContent = user.count;
};


