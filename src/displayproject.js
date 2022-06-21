import { Projects } from './projects.js';


const displayProject = () => {
    const addDataProject = (li) => {
        if (Projects.prohibitDuplicateProjects(project).thisProject.duplicateTitle !== ''){
            return li.setAttribute('data-project', `${project[0].duplicateTitle}`);
        }
        else {
            return li.setAttribute('data-project', `${project[0].title}`);
        }
    }
}