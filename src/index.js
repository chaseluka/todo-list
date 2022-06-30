import { inputTaskDOMDisplay } from './addtodo.js';
import { newProject } from './newproject.js';
import { Projects } from './projects.js';
import { displayCompletedTasksOnDOM } from './displaycompletetasks.js';

inputTaskDOMDisplay;
newProject;
Projects.retrieveData();
console.log('hi');
const completedTasks = document.getElementById('completed');
completedTasks.addEventListener('click', () => {
    Projects.projectsArray.completedTasks.forEach(task => {
        Projects.clearAllProjectsFromDOM();
        displayCompletedTasksOnDOM(task);
    });
    Projects.completedTasksIsClicked.completedClicked = true;
    Projects.showSelectedProject();
})


 




