export default async function getProjects() {
    const jsonProjectsFile = "/js/data/projects.json";
    const data = await fetch(jsonProjectsFile);
    const projects = await data.json();
    return projects;
}
