import { setupHomeScreen } from "./homescreen.js";
import { setupContactScreen } from "./contact.js";
import { setupMenu } from "./menu.js";
import "../styles/styles.css";

const buttons = document.querySelectorAll('button');
const content = document.querySelector(".content");

const clearContent = function () {
    content.innerHTML = '';
};



buttons.forEach((button) => {
    button.addEventListener("click", () => {
        clearContent();
        if (button.id === "home") {
            setupHomeScreen();
        } else if (button.id === "menu") {
            setupMenu();
        } else if (button.id == "contact") {
            setupContactScreen();
        }
    })
});

setupHomeScreen(); 