import { inputTaskDOMDisplay } from "./addtodo.js";
import { newProject } from "./newproject.js";
import { Projects } from "./projects.js";
import { displayCompletedTasksOnDOM } from "./displaycompletetasks.js";
import "./style.css";
import Circle from "./images/plus-circle.svg";

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

const task = document.getElementById("new-task");
const project = document.getElementById("new-project");

task.prepend(Circle);
project.prepend(Circle);
