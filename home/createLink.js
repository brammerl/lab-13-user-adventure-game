export function createLink(obj) {
    const link = document.createElement('a');
    

    link.classList.add('action');
    

    link.href = '../place/?id=' + obj.id;
   

    link.textContent = obj.title;
   
    return link;
}

