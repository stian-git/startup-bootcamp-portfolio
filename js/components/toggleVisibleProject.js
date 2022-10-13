export default function toggleVisibleProject() {
    const projectIndex = this.dataset.projectid;

    const currentActiveProject = document.querySelector(".project.active");

    // hide rows in prev project
    const rowsToHide = document.querySelectorAll(".project.active .visibilitytoggler");
    rowsToHide.forEach((row) => {
        row.hidden = true;
    });
    // Make the previous project inactive
    currentActiveProject.classList.remove("active");

    // Show rows in the new active project.
    const rowsToShow = document.querySelectorAll(".project")[projectIndex].querySelectorAll(".visibilitytoggler");
    rowsToShow.forEach((row) => {
        row.hidden = false;
    });
    // Set the new project active.
    const projectToShow = document.querySelectorAll(".project")[projectIndex];
    projectToShow.classList.add("active");
}
