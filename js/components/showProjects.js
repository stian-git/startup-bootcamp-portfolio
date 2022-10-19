//import projects from "../data/projects.json" assert { type: "json" };
import toggleVisibleProject from "./toggleVisibleProject.js";
//import { projects } from "./variables.js";

//import { allMagnifyingGlasses } from "./variables.js";

export default function showProjects(projects) {
    //console.log(arr);
    const portfolioSection = document.querySelector("#portfolio");
    portfolioSection.innerHTML = "<h1>Portfolio</h1>";
    projects.forEach((project) => {
        const keywordsString = project.keywords.join(", ") + ".";
        //console.log(keywordsString);
        let highlightsList = "";
        project.highlights.forEach((highlight) => {
            highlightsList += `<li class="project__row-listitem">${highlight}</li>`;
        });
        //console.log(highlightsList);
        let description = "";
        project.description.forEach((line) => {
            description += `<p class="project__row-body">${line}</p>`;
        });
        let repoIconClasses = "fa-solid fa-code";
        if (project.repositoryType.toLowerCase() === "github") {
            repoIconClasses = "fa-brands fa-github";
        }
        //console.log(description);
        portfolioSection.innerHTML += `
        <div class="project">
                    <div class="project__row">
                        <div class="project__row-left">
                            <div class="project__row-left-top">
                                <h3 class="project__row-title">${project.type}: ${project.title}</h3>
                                <div class="project__row-right-bottom project-mobileonly">
                                    <img src="${project.imageThumbUrl}" class="project__row-image" alt="Screenshot of ${project.title}" title="Screenshot of ${project.title}" aria-label="Screenshot of ${project.title}" />
                                </div>
                                <p class="project__row-header project-desktoponly">Keywords:</p>
                                <p class="project__row-body project-desktoponly">${keywordsString}</p>
                                <p class="project__row-header project-desktoponly">Repository</p>
                                <a href="${project.repositoryUrl}" target="_blank" class="project__row-link project-desktoponly">
                                    <i class="${repoIconClasses} fa-2xl project__row-icon project-desktoponly"></i>
                                    <p class="project__row-link-text project-desktoponly">${project.repositoryType}</p>
                                </a>
                            </div>
                        </div>
                        <div class="project__row-right project-desktoponly">
                            <div class="project__row-right-top">
                                <i class="fa-solid fa-magnifying-glass fa-2xl project__row-icon project__row-icon-magnifier" data-projectid="${project.id}"></i><a href="${project.url}" target="_blank" title="Link to ${project.title}" aria-label="Link to ${project.title}"><i class="fa-solid fa-share-from-square fa-2xl project__row-icon"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="project__row visibilitytoggler" hidden>
                        <div class="project__row-left-bottom">
                            <p class="project__row-header">Highlighted features:</p>
                            <ul>
                            ${highlightsList}
                            </ul>
                        </div>
                        <div class="project__row-right-bottom project-desktoponly">
                            <img src="${project.imageThumbUrl}" class="project__row-image" alt="Screenshot of ${project.title}" title="Screenshot of ${project.title}" aria-label="Screenshot of ${project.title}" />
                        </div>
                    </div>
                    <div class="visibilitytoggler" hidden>
                        <p class="project__row-header">Description:</p>
                        ${description}
                    </div>
                    <p class="project__row-header project-mobileonly">Keywords:</p>
                    <p class="project__row-body project-mobileonly">${keywordsString}</p>
                    <p class="project__row-header project-mobileandactiveonly">Repository:</p>
                    <a href="${project.repositoryUrl}" target="_blank" class="project__row-link project-mobileandactiveonly">
                        <i class="${repoIconClasses} fa-2xl project-mobileandactiveonly"></i>
                        <p class="project__row-link-text project-mobileandactiveonly">${project.repositoryType}</p>
                    </a>
                    <div class="project__row-right project-mobileonly">
                        <div class="project__row-right-top">
                            <p class="project__row-header project-mobileonly project-mobileonly-left">Actions:</p>
                            <i class="fa-solid fa-magnifying-glass fa-2xl project__row-icon project__row-icon-magnifier project__row-icon-mobile" data-projectid="${project.id}"></i>
                            <a href="${project.url}" target="_blank" title="Link to ${project.title}" aria-label="Link to ${project.title}"><i class="fa-solid fa-share-from-square fa-2xl project__row-icon project__row-icon-mobile"></i></a>
                        </div>
                    </div>
                </div>`;
    });
    // add active class to the first project:
    document.querySelectorAll(".project")[0].classList.add("active");
    // Make additional elements visible to the active project.
    toggleVisibleProject(0);

    // Add eventlisteners to magnifying glasses:
    const allMagnifyingGlasses = document.querySelectorAll(".fa-magnifying-glass");
    allMagnifyingGlasses.forEach((icon) => {
        icon.addEventListener("click", toggleVisibleProject);
    });
}

// add eventlisteners:
// magnifying glass (2x?)
// open in own window (2x?)
