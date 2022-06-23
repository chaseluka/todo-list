import { inputTaskDOMDisplay } from './addtodo.js';
import { newProject } from './newproject.js';
import { Projects } from './projects.js';

inputTaskDOMDisplay;
newProject;

Projects.addProjectToArray('My Tasks');
Projects.projectsArray.projectsList[0][0].projectSelected = 'true';

Projects.deleteProjectFromArray('My Tasks');
console.log(Projects.projectsArray.projectsList);

 




