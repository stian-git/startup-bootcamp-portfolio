export default async function getData(dataString) {
    // currently supports the datastrings "experience" and "projects", but I use switch to easily expand this function in the future.
    let dataUrl;
    switch (dataString) {
        case "experience":
            dataUrl = "./js/data/experience.json";
            break;
        case "projects":
            dataUrl = "./js/data/projects.json";
            break;
        default:
            break;
    }
    const data = await fetch(dataUrl);
    const result = await data.json();
    return result;
}
