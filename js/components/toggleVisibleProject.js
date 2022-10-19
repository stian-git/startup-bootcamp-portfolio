export default function toggleVisibleProject(projectIndex) {
    // If index is not a number it`s triggered from an eventlistener:
    if (isNaN(projectIndex)) {
        projectIndex = this.dataset.projectid;
    }
    // Identify the current active project
    const currentActiveProject = document.querySelector(".project.active");

    // Hide rows in the previous active project
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
