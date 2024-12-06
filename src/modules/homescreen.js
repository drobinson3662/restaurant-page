const setupHomeScreen = function() {

    const container = document.querySelector(".content");

    const description = document.createElement('p');
    description.textContent = "Welcome to Ali Baba, where the rich flavors of the Middle East come alive. Our menu features authentic, freshly prepared dishes inspired by centuries-old recipes, from tender kebabs to fragrant rice dishes, savory dips, and freshly baked flatbreads. Whether you're here for a quick bite or a special celebration, Ali Baba offers a warm, inviting atmosphere and a true taste of Middle Eastern hospitality. Join us for an unforgettable dining experience!";

    const hours = document.createElement('p');
    hours.classList.add('hours');
    hours.setAttribute('style', 'white-space: pre;');
    hours.textContent = `Hours \n
    Sunday 9 a.m. - 8 p.m. \n
    Monday 8 a.m. - 9 p.m. \n
    Tuesday 8 a.m. - 9 p.m. \n
    Wednesday 8 a.m. - 9 p.m. \n
    Thursday 8 a.m. - 9 p.m. \n
    Friday 8 a.m. - 9 p.m. \n
    Saturday 8 a.m. - 9 p.m. `;

    const location = document.createElement('p');
    location.textContent = "Visit us anytime at 123 Easy St. Chicago, IL 12345";

    container.appendChild(description);
    container.appendChild(hours);
    container.appendChild(location);
    
};

export {setupHomeScreen};