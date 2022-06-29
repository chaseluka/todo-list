import { inputTaskDOMDisplay } from './addtodo.js';
import { newProject } from './newproject.js';
import { Projects } from './projects.js';
import { displayCompletedTasksOnDOM } from './displaycompletetasks.js';

inputTaskDOMDisplay;
newProject;

Projects.addProjectToArray('My Tasks');
Projects.projectsArray.projectsList[0][0].projectSelected = 'true';

Projects.deleteProjectFromArray('My Tasks');

const completedTasks = document.getElementById('completed');
completedTasks.addEventListener('click', () => {
    Projects.projectsArray.completedTasks.forEach(task => {
        Projects.clearAllProjectsFromDOM();
        displayCompletedTasksOnDOM(task);
    });
    Projects.completedTasksIsClicked.completedClicked = true;
    console.log(Projects.completedTasksIsClicked.completedClicked);
    Projects.showSelectedProject();
})

 




