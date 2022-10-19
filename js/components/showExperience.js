//import cv from "../data/experience.json";
import { awardsAndOthersAccordion, awardsAndOthersTab, certsAndCoursesAccordion, certsAndCoursesTab, educationAccordion, educationTab, interestsAccordion, interestsTab, workAccordion, workTab } from "./variables.js";

export default function showExperience(cv) {
    // WORK
    cv.work.forEach((job) => {
        let jobDescription = "";
        job.description.forEach((line) => {
            jobDescription += `<p class="experience__content-text-body">${line}</p>`;
        });
        let jobUrl = "";
        if (job.url !== null) {
            jobUrl = `
            <p class="experience__content-text-link">
                <a href="${job.url}" class="experience__content-text-link-address" aria-label="Link to ${job.company}" title="Link to ${job.company}" target="_blank">${job.url}</a>
            </p>`;
        }
        workAccordion.innerHTML += `
        <div class="experience__content-text-wrapper">
                <h2 class="experience__content-text-title">${job.period} : ${job.company}</h2>
                ${jobUrl}
                <h3 class="experience__content-text-subtitle">${job.title}</h3>
                ${jobDescription}
            </div>
        `;
    });

    // EDUCATION
    cv.education.forEach((school) => {
        let classDescription = "";
        if (school.description !== null) {
            school.description.forEach((line) => {
                classDescription += `<p class="experience__content-text-body">${line}</p`;
            });
        }
        let classKeywordString = "";
        if (school.keywords !== null) {
            const classKeywords = school.keywords.join(", ") + ".";
            classKeywordString = `<p class="experience__content-text-body">
            <i class="experience__content-text-body-highlight">More Keywords: </i> ${classKeywords}
        </p>`;
        }
        let classUrl = "";
        if (school.url !== null) {
            classUrl = `
            <p class="experience__content-text-link">
                <a href="${school.url}" class="experience__content-text-link-address" target="_blank" aria-label="Link to ${school.school}" title="Link to ${school.school}">${school.url}</a>
            </p>`;
        }
        educationAccordion.innerHTML += `
        <div class="experience__content-text-wrapper">
            <h2 class="experience__content-text-title">${school.period} : ${school.class}</h2>
            ${classUrl}
        <h3 class="experience__content-text-subtitle">${school.school}</h3>
        ${classDescription}
        ${classKeywordString}        
    </div>
        `;
    });

    // CERTS AND COURSES
    let certsString = "";
    cv.certsandcourses.certs.forEach((cert) => {
        certsString += `<p class="experience__content-text-body">${cert}</p>`;
    });
    let courses = "";
    cv.certsandcourses.courses.forEach((course) => {
        let desc = "";
        if (course.description !== null) {
            desc = `<p class="experience__content-text-body">${course.description}</p>`;
        }
        courses += `
            <h3 class="experience__content-text-subtitle">${course.title}</h3>
            ${desc}`;
    });
    certsAndCoursesAccordion.innerHTML += `
    <div class="experience__content-text-wrapper">
        <h2 class="experience__content-text-title">Certifications</h2>
        ${certsString}
    </div>
    <div class="experience__content-text-wrapper">
        <h2 class="experience__content-text-title">Courses</h2>
        ${courses}
    </div>`;

    // AWARDS AND OTHERS

    let allOthersHtml = "";
    cv.awardsandothers.other.forEach((otherexperience) => {
        let urlString = "";
        if (otherexperience.url !== null) {
            let urlText = "Link";
            if (otherexperience.urltext !== null) {
                urlText = otherexperience.urltext;
            }

            urlString = `
                <i class="experience__content-text-link">${urlText}
                    <a href="${otherexperience.url}" class="experience__content-text-link-address" title="Relevant link for ${otherexperience.title}" aria-label="Relevant link for ${otherexperience.title}">${otherexperience.url}</a>
                </i>`;
        }
        allOthersHtml += `<p class="experience__content-text-body">${otherexperience.when}: ${otherexperience.title}</p>${urlString}`;
    });
    let allAwardsHtml = "";
    cv.awardsandothers.awards.forEach((award) => {
        allAwardsHtml += `<p class="experience__content-text-body">${award.title} (${award.when})</p>`;
    });

    awardsAndOthersAccordion.innerHTML = `
    <div class="experience__content-text-wrapper">
        <h2 class="experience__content-text-title">Other Experiences</h2>
        ${allOthersHtml}
    </div>
    <div class="experience__content-text-wrapper">
        <h2 class="experience__content-text-title">Awards</h2>
        ${allAwardsHtml}
        <i class="experience__content-text-link">(*) Toshiba-awards are related to my skills with MFDs and network management, and were achieved through theoretical tests arranged by Toshiba World Wide.</i>
    </div>`;

    // INTERESTS
    let interestsHtml = "";
    cv.interests.forEach((interest) => {
        interestsHtml += `
        <h3 class="experience__content-text-subtitle">${interest.interest}</h3>
        <p class="experience__content-text-body">${interest.description}</p>`;
    });
    interestsAccordion.innerHTML = `
    <div class="experience__content-text-wrapper">
        <h2 class="experience__content-text-title">Hobbies and Interests</h2>
        ${interestsHtml}
    </div>`;

    // Adding the same info to Tabs:
    workTab.innerHTML = workAccordion.innerHTML;
    educationTab.innerHTML = educationAccordion.innerHTML;
    certsAndCoursesTab.innerHTML = certsAndCoursesAccordion.innerHTML;
    awardsAndOthersTab.innerHTML = awardsAndOthersAccordion.innerHTML;
    interestsTab.innerHTML = interestsAccordion.innerHTML;
}
