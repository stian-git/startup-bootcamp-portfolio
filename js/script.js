import isEmailSyntaxValid from "./components/isEmailSyntaxValid.js";
import minLengthCheck from "./components/minLengthCheck.js";
import sendContactForm from "./components/sendContactForm.js";
import toggleVisibleProject from "./components/toggleVisibleProject.js";
import { allMagnifyingGlasses, body, contactForm, formEmailField, formMessageField, headerOffsetTop, minMessageLength, sendContactFormButton } from "./components/variables.js";

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

allMagnifyingGlasses.forEach((icon) => {
    icon.addEventListener("click", toggleVisibleProject);
});

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
