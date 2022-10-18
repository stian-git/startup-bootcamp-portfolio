export default async function getProjects() {
    const jsonProjectsFile = "/js/data/projects.json";
    const data = await fetch(jsonProjectsFile);
    const projects = await data.json();
    return projects;
}
// Add spinners?
// Alternative without spinners:
// $.getJSON("test.json", function(json) {
//     console.log(json); // this will show the info it in firebug console
// });

// Check out this version:
// https://www.youtube.com/watch?v=Z92PqSyUBSI

// import cv from "./json/sample.json" assert {type: "json"};
