import { Projects } from './projects.js';


const displayProject = (project) => {
    const addDataProject = (newProject) => {
        if (Projects.prohibitDuplicateProjects(project).thisProject.duplicateTitle !== ''){
            return newProject.setAttribute('data-project', `${project.duplicateTitle}`);
        }
        else {
            return newProject.setAttribute('data-project', `${project.title}`);
        }
    }

    if (project.title !== ''){
        const projectsList = document.querySelector('.projects-list');

        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        addDataProject(projectDiv);
        
        projectsList.appendChild(projectDiv);

        const projectLeft = document.createElement('div');
        projectLeft.classList.add('project-left');

        const projectRight = document.createElement('div');
        projectRight.classList.add('project-right');

        projectDiv.appendChild(projectLeft);
        projectDiv.appendChild(projectRight);

        const list = document.createElement('img');
        list.src = '../src/images/format-list-bulleted.svg';

        const projectTitle = document.createElement('div');
        projectTitle.classList.add('project-title');
        projectTitle.textContent = project.title;

        projectLeft.appendChild(list);
        projectLeft.appendChild(projectTitle);

        const deleteImg = document.createElement('img');
        deleteImg.src = '../src/images/delete.svg';

        projectRight.appendChild(deleteImg);

        deleteImg.addEventListener('click', (e) => {
            const deleteProject = e.target.parentElement.parentElement;
            projectsList.removeChild(deleteProject);

            Projects.deleteProjectFromArray(project);
        });

        projectLeft.addEventListener('click', () => {
            Projects.setSelectedProject(project);
        })
        
    }
}

export { displayProject }