import { Projects } from './projects.js';


const displayProject = (project) => {
    const addDataProject = (newProject) => {
        if (Projects.prohibitDuplicateProjects(project).thisProject.duplicateProjectTitle !== ''){
            return newProject.setAttribute('data-project', `${project.duplicateProjectTitle}`);
        }
        else {
            return newProject.setAttribute('data-project', `${project.projectTitle}`);
        }
    }
    

    if (project.projectTitle !== ''){
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
        projectTitle.textContent = project.projectTitle;

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

            const newTask = document.getElementById('new-task');
            newTask.style.display = 'flex';

            Projects.completedTasksIsClicked.completedClicked = false;
            Projects.showSelectedProject();
        })
        
    }
}

export { displayProject }