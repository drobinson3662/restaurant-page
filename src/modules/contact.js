export const setupContactScreen = function() {

    const content = document.querySelector(".content");

    const contactTitle = document.createElement('p');
    contactTitle.classList.add('title');
    contactTitle.textContent = `Contact Information`;

    const contactInfo = document.createElement('p');
    contactInfo.classList.add('contactInfo');
    contactInfo.textContent = `You can contact us anytime by emailing email@alibaba.com or by calling 123-456-7890!`;

    content.appendChild(contactTitle);
    content.appendChild(contactInfo);
};
