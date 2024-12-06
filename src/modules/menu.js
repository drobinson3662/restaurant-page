export const setupMenu = function() {
    const content = document.querySelector('.content');

    const menu = document.createElement('p');
    menu.classList.add('title');

    menu.textContent = `Our Menu`;

    content.appendChild(menu);
};