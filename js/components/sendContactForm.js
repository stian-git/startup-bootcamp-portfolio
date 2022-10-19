import { formEmailField, formMessageField, formNameField, formSubjectField } from "./variables.js";

export default function sendContactForm(e) {
    e.preventDefault();
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
        //alert(message);
        //console.log(message);
        const modalBody = document.querySelector(".modalcontent__body-message");
        if (message === "OK") {
            // success
            modalBody.innerHTML = `
            <p class="modalcontent__body-message-line modalcontent__body-message-line-success">Message successfully sent.</p>
            `;
            console.log("Alles in ordnung");
            // clear inputs?
            formEmailField.value = "";
            formNameField.value = "";
            formSubjectField.value = "";
            formMessageField.value = "";
        } else {
            // error
            console.log("Sending failed");
            console.log(message);
            modalBody.innerHTML = `
            <p class="modalcontent__body-message-line modalcontent__body-message-line-error">Unable to send message. Please try again.</p>
            <p class="modalcontent__body-message-line modalcontent__body-message-line-error">Error: ${message}</p>
            `;
            // message = error details
        }
        const modalTrigger = document.querySelector(".modal-trigger");
        modalTrigger.click();
    });
    // Add a modal to display message.
}
