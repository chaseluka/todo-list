import { displayTask } from './displaytask.js';
import { displayProject } from './displayproject.js';

const Projects = (() => {
    const projectsArray = (() => {
        let projectsList = [];
        let completedTasks = [];
        return { projectsList, completedTasks }
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

    const findProjectElement = (desiredElement) => {
        const projectsList = document.querySelectorAll('.project');
        let thisElement = [...projectsList].filter(element => {
            return element.getAttribute('data-project') === desiredElement;
        });
        return thisElement
    }

    const showSelectedProject = () => {
        const completeTasks = document.querySelector('#completed div');
        if (completedTasksIsClicked.completedClicked === true){
            completeTasks.classList.add('project-selected');
            projectsArray.projectsList.forEach(project => {
                if (project[0].duplicateProjectTitle !== ''){
                    let element = findProjectElement(project[0].duplicateProjectTitle);
                    element[0].classList.remove('project-selected');
                }
                else {
                    let element = findProjectElement(project[0].projectTitle);
                    element[0].classList.remove('project-selected');
                }
            })
        }
        else {
            completeTasks.classList.remove('project-selected');
            projectsArray.projectsList.forEach(project => {
                if (project[0].projectSelected === 'true'){
                    if (project[0].duplicateProjectTitle !== ''){
                        let element = findProjectElement(project[0].duplicateProjectTitle);
                        element[0].classList.add('project-selected');;
                    }
                    else {
                        let element = findProjectElement(project[0].projectTitle);
                        element[0].classList.add('project-selected');
                    }
                }
                else {
                    if (project[0].duplicateProjectTitle !== ''){
                        let element = findProjectElement(project[0].duplicateProjectTitle);
                        element[0].classList.remove('project-selected');
                    }
                    else {
                        let element = findProjectElement(project[0].projectTitle);
                        element[0].classList.remove('project-selected');
                    }
                }
            })
        }
    }

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

    const findTaskInProject = (thisTask) => {
        let thisProject = determineSelectedProject().filter(task => {
            if (task.duplicateTitle !== ''){
                return task.duplicateTitle === thisTask
            }
            else if (task.title !== ''){
                return task.title === thisTask
            }
        });
        return thisProject
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

    const completedTasksIsClicked = (() => {
        let completedClicked = false;
        return { completedClicked }
    })();

    return { projectsArray, addProjectToArray, loadProjectonDOM, determineSelectedProject, 
        setSelectedProject, prohibitDuplicateProjects, deleteProjectFromArray, clearAllProjectsFromDOM,
        deleteTaskfromLibrary, findTaskInProject, showSelectedProject, completedTasksIsClicked }
})();

export { Projects }