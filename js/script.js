import getData from "./components/getData.js";
import isEmailSyntaxValid from "./components/isEmailSyntaxValid.js";
import minLengthCheck from "./components/minLengthCheck.js";
import sendContactForm from "./components/sendContactForm.js";
import showExperience from "./components/showExperience.js";
import showProjects from "./components/showProjects.js";

import { body, contactForm, formEmailField, formMessageField, formNameField, formRequirementFieldEmail, formRequirementFieldMessage, formRequirementFieldName, formRequirementFieldSubject, formSubjectField, menuToggle, minMessageLength, navbar, navLinks, sendContactFormButton } from "./components/variables.js";

// Adds the sticky-class when the navbar should be locked to the top:
window.onscroll = (e) => {
    const headerOffsetTop = navbar.offsetTop;
    if (window.pageYOffset > headerOffsetTop) {
        body.classList.add("navbar-present");
    } else {
        body.classList.remove("navbar-present");
    }
};

// Contact form:
sendContactFormButton.disabled = true;
sendContactFormButton.addEventListener("click", sendContactForm);

contactForm.addEventListener("keyup", (e) => {
    const emailIsOk = isEmailSyntaxValid(formEmailField.value.trim());
    const messageIsOk = minLengthCheck(formMessageField.value.trim(), minMessageLength);
    if (emailIsOk && messageIsOk) {
        sendContactFormButton.disabled = false;
    } else {
        sendContactFormButton.disabled = true;
    }
});

formMessageField.addEventListener("keyup", () => {
    const charsLeft = minMessageLength - formMessageField.value.trim().length;
    if (charsLeft > 0) {
        // show message
        formRequirementFieldMessage.innerHTML = `You need ${charsLeft} more characters.`;
    } else {
        // hide message, show checkbox;
        formRequirementFieldMessage.innerHTML = `<i class="fa-solid fa-circle-check contact__row-requirement-field-checkicon"></i>`;
    }
    formRequirementFieldMessage.classList.add("contact__row-requirement-field-show");
});

formEmailField.addEventListener("keyup", () => {
    formRequirementFieldEmail.classList.add("contact__row-requirement-field-show");
});

formSubjectField.addEventListener("keyup", () => {
    formRequirementFieldSubject.classList.add("contact__row-requirement-field-show");
});

formNameField.addEventListener("keyup", () => {
    formRequirementFieldName.classList.add("contact__row-requirement-field-show");
});

// Load and display JSON-data
getData("experience").then((data) => {
    showExperience(data);
});

getData("projects").then((data) => {
    showProjects(data);
});

// enable tooltips:
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));

// Closes navbar on click (mobile only)
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        if (document.querySelector(".navbar-collapse.show")) {
            menuToggle.classList.remove("show");
        }
    });
});
