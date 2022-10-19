import {
    formEmailField,
    formMessageField,
    formNameField,
    formRequirementFieldEmail,
    formRequirementFieldMessage,
    formRequirementFieldName,
    formRequirementFieldSubject,
    formSubjectField,
    modalBody,
    modalContent,
    modalTrigger,
    sendContactFormButton,
} from "./variables.js";

export default function sendContactForm(e) {
    e.preventDefault();
    // disable the sendbutton to avoid duplicates:
    sendContactFormButton.disabled = true;
    // add spinner to button:
    sendContactFormButton.innerHTML = `<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
    Sending...`;
    const contactEmail = formEmailField.value;
    const contactName = formNameField.value;
    const contactSubject = formSubjectField.value;
    const contactMessage = formMessageField.value;
    Email.send({
        SecureToken: "46d08c8f-014e-44f3-aad3-647d3b2f7d5f",
        To: "smartinsen80@gmail.com",
        From: "Contact Form <smartinsen80@gmail.com>",
        Subject: `Contact: ${contactSubject}`,
        Body: `<h2>Message from: ${contactName} (${contactEmail})</h2><h3>${contactSubject}</h3><p>${contactMessage}</p><p>Sent from Portfolio page.</p>`,
    }).then((message) => {
        if (message === "OK") {
            // success
            modalBody.innerHTML = `
            <p class="modalcontent__body-message-line modalcontent__body-message-line-success">Message successfully sent.</p>
            `;
            modalContent.classList.remove("modalcontent-error");
            // clear inputs:
            formEmailField.value = "";
            formNameField.value = "";
            formSubjectField.value = "";
            formMessageField.value = "";
            // clear requirement-icons:
            formRequirementFieldEmail.classList.remove("contact__row-requirement-field-show");
            formRequirementFieldMessage.classList.remove("contact__row-requirement-field-show");
            formRequirementFieldName.classList.remove("contact__row-requirement-field-show");
            formRequirementFieldSubject.classList.remove("contact__row-requirement-field-show");
        } else {
            // error
            modalContent.classList.add("modalcontent-error");
            modalBody.innerHTML = `
            <p class="modalcontent__body-message-line modalcontent__body-message-line">Unable to send message. Please try again.</p>
            <i class="modalcontent__body-message-line modalcontent__body-message-errormessage">Error: ${message}</i>
            `;
            // Enable the button again if the attempt failed:
            sendContactFormButton.disabled = false;
        }
        modalTrigger.click();
        sendContactFormButton.innerHTML = "Send";
    });
}
