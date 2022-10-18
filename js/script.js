import isEmailSyntaxValid from "./components/isEmailSyntaxValid.js";
import minLengthCheck from "./components/minLengthCheck.js";
import sendContactForm from "./components/sendContactForm.js";
import showExperience from "./components/showExperience.js";
import showProjects from "./components/showProjects.js";

import {
    body,
    contactForm,
    formEmailField,
    formMessageField,
    formNameField,
    formRequirementFieldEmail,
    formRequirementFieldMessage,
    formRequirementFieldName,
    formRequirementFieldSubject,
    formSubjectField,
    headerOffsetTop,
    minMessageLength,
    sendContactFormButton,
} from "./components/variables.js";

// Adds the sticky-class when the navbar should be locked to the top:
window.onscroll = () => {
    if (window.pageYOffset > headerOffsetTop) {
        //header.classList.add("sticky");
        body.classList.add("navbar-present");
    } else {
        //header.classList.remove("sticky");
        body.classList.remove("navbar-present");
    }
};

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
    console.log("Chars Left: " + charsLeft);
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

showProjects();
showExperience();
