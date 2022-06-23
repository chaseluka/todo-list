import { displayTask } from './displaytask.js';
import { displayProject } from './displayproject.js';

const Projects = (() => {
    const projectsArray = (() => {
        let projectsList = [];
        return { projectsList }
    })();

    const addProjectToArray = (project) => {    
        const newProject = {projectSelected: 'false', projectTitle: project, duplicateProjectTitle: ''};
        project = [];
        project.unshift(newProject);
        projectsArray.projectsList.push(project);
        displayProject(project[0]);
    }

    const loadProjectonDOM = (project) => {
        project.forEach(task => {
            if (task.projectTitle === undefined){
                displayTask(task);
            }
        });
    }

    const clearAllProjectsFromDOM = () => {
        const taskList = document.querySelector('.task-list');
        while (taskList.lastElementChild) {
            taskList.removeChild(taskList.lastElementChild);
        }
    }

    const deleteProjectFromArray = (thisProject) => {
        projectsArray.projectsList = projectsArray.projectsList.filter(project => {
            if (thisProject.duplicateProjectTitle !== ''){
                return project[0].duplicateProjectTitle !== thisProject.duplicateProjectTitle;
            }
            else if (project[0].duplicateProjectTitle === ''){
                return project[0].projectTitle !== thisProject.projectTitle
            }
            else return project[0];
        });
    }

    const setSelectedProject = (thisProject) => {
        projectsArray.projectsList.forEach(project => {
            if (thisProject.duplicateProjectTitle !== ''){
                if (project[0].projectTitle === thisProject.projectTitle && thisProject.duplicateProjectTitle === project[0].duplicateProjectTitle){
                    project[0].projectSelected = 'true';
                }
                else project[0].projectSelected = 'false';
            }
            else {
                if (project[0].projectTitle === thisProject.projectTitle && project[0].duplicateProjectTitle === ''){
                    project[0].projectSelected = 'true';
                }
                else project[0].projectSelected = 'false';
            }
        });
        clearAllProjectsFromDOM();
        loadProjectonDOM(determineSelectedProject());
    }

    const determineSelectedProject = () => {
        let selectedProject = projectsArray.projectsList.filter(project => {
            return project[0].projectSelected === 'true';
        })
        return selectedProject[0]
    };

    const replaceProjectinArray = (thisProject) => {
        projectsArray.projectsList.forEach(project => {
            if (project[0].projectSelected === 'true'){
                let index = projectsArray.projectsList.indexOf(project);
                projectsArray.projectsList.splice(index, 1, thisProject)
            }
            
        });
    }

    const deleteTaskfromLibrary = (deleteThis) => {
        let thisProject = determineSelectedProject().filter(task => {
            if (task.duplicateTitle !== ''){
                return task.duplicateTitle !== deleteThis
            }
            else if (task.title !== ''){
                return task.title !== deleteThis
            }
        });
        replaceProjectinArray(thisProject);
    }

    const prohibitDuplicateProjects = (thisProject) => {
        let duplicateProjects = projectsArray.projectsList.filter(obj => {
            if (obj[0].duplicateProjectTitle !== ''){
                return obj[0].duplicateProjectTitle === thisProject.duplicateProjectTitle
            }
            else return obj[0].projectTitle === thisProject.projectTitle;
        });
        if (duplicateProjects.length > 1){
            thisProject.duplicateProjectTitle = thisProject.projectTitle + Math.random()*100;
        }
        return { duplicateProjects, thisProject}
    }
    return { projectsArray, addProjectToArray, loadProjectonDOM, determineSelectedProject, 
        setSelectedProject, prohibitDuplicateProjects, deleteProjectFromArray, clearAllProjectsFromDOM,
        deleteTaskfromLibrary }
})();

export { Projects }