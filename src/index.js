import { inputTaskDOMDisplay } from "./addtodo.js";
import { newProject } from "./newproject.js";
import { Projects } from "./projects.js";
import { displayCompletedTasksOnDOM } from "./displaycompletetasks.js";
import "./style.css";

inputTaskDOMDisplay;
newProject;
Projects.retrieveData();
const completedTasks = document.getElementById("completed");
completedTasks.addEventListener("click", () => {
  Projects.projectsArray.completedTasks.forEach((task) => {
    Projects.clearAllProjectsFromDOM();
    displayCompletedTasksOnDOM(task);
  });
  Projects.completedTasksIsClicked.completedClicked = true;
  Projects.showSelectedProject();
});
