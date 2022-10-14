import { formRequirementFieldEmail } from "./variables.js";

export default function isEmailSyntaxValid(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    if (patternMatches) {
        // ok
        formRequirementFieldEmail.innerHTML = `<i class="fa-solid fa-circle-check contact__row-requirement-field-checkicon"></i>`;
    } else {
        // show warning
        formRequirementFieldEmail.innerHTML = `A valid address required.`;
    }

    return patternMatches;
}
