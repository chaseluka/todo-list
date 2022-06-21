import { displayTask } from './displaytask.js';

const Projects = (() => {
    const projectsArray = (() => {
        let projectsList = [];
        return { projectsList }
    })();

    const addProjectToArray = (project) => {    
        const projectSelected = {projectSelected: 'false', title: project, duplicateTitle: ''};
        project = [];
        project.unshift(projectSelected);
        projectsArray.projectsList.push(project);
    }

    const loadProjectonDOM = (project) => {
        project.forEach(task => {
            if (task.title !== undefined){
                displayTask(task);
            }
        });
    }

    const setSelectedProject = (thisProject) => {
        projectsArray.projectsList.forEach(project => {
            if (project[0].title === thisProject){
                project[0].projectSelected = 'true';
            }
            else project[0].projectSelected = 'false';
        })
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
                return obj[0].duplicateTitle === thisProject[0].duplicateTitle
            }
            else return obj[0].duplicateTitle === thisProject[0].title;
        });
        if (duplicateProjects.length > 1){
            thisProject[0].duplicateTitle = thisProject[0].title + Math.random()*100;
        }
        return { duplicateProjects, thisProject}
    }
    return { projectsArray, addProjectToArray, loadProjectonDOM, determineSelectedProject, setSelectedProject, prohibitDuplicateProjects}
})();

export { Projects }