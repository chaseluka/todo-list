import { displayTask } from './displaytask.js';
import { displayProject } from './displayproject.js';

const Projects = (() => {
    const projectsArray = (() => {
        let projectsList = [];
        return { projectsList }
    })();

    const addProjectToArray = (project) => {    
        const newProject = {projectSelected: 'false', title: project, duplicateTitle: ''};
        project = [];
        project.unshift(newProject);
        projectsArray.projectsList.push(project);
        displayProject(project[0]);
        console.log(projectsArray.projectsList);
    }

    const loadProjectonDOM = (project) => {
        project.forEach(task => {
            if (task.title !== undefined){
                displayTask(task);
            }
        });
    }

    const deleteProjectFromArray = (thisProject) => {
        projectsArray.projectsList = projectsArray.projectsList.filter(project => {
            if (thisProject.duplicateTitle !== ''){
                return project[0].duplicateTitle !== thisProject.duplicateTitle;
            }
            else if (project[0].duplicateTitle === ''){
                return project[0].title !== thisProject.title
            }
            else return project[0];
        })
    }

    const setSelectedProject = (thisProject) => {
        projectsArray.projectsList.forEach(project => {
            if (thisProject.duplicateTitle !== ''){
                if (project[0].title === thisProject.title && thisProject.duplicateTitle === project[0].duplicateTitle){
                    project[0].projectSelected = 'true';
                }
                else project[0].projectSelected = 'false';
            }
            else {
                if (project[0].title === thisProject.title && project[0].duplicateTitle === ''){
                    project[0].projectSelected = 'true';
                }
                else project[0].projectSelected = 'false';
            }
        });
    }

    const determineSelectedProject = () => {
        let selectedProject = projectsArray.projectsList.filter(project => {
            return project[0].projectSelected === 'true';
        })
        return { selectedProject }
    }

    const prohibitDuplicateProjects = (thisProject) => {
        let duplicateProjects = projectsArray.projectsList.filter(obj => {
            if (obj[0].duplicateTitle !== ''){
                return obj[0].duplicateTitle === thisProject.duplicateTitle
            }
            else return obj[0].title === thisProject.title;
        });
        if (duplicateProjects.length > 1){
            thisProject.duplicateTitle = thisProject.title + Math.random()*100;
        }
        return { duplicateProjects, thisProject}
    }
    return { projectsArray, addProjectToArray, loadProjectonDOM, determineSelectedProject, 
        setSelectedProject, prohibitDuplicateProjects, deleteProjectFromArray}
})();

export { Projects }