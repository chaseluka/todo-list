import { Projects } from './projects.js';


const newProject = (() => {
    const projecstList = document.querySelector('.projects-list');

    const inputProject = document.createElement('div');
    inputProject.classList.add('input-project');

    const inputContainer = document.createElement('div');
    inputContainer.classList.add('input-container');

    const project = document.createElement('input');
    project.id = 'project';
    project.name = 'project';
    project.type = 'text';

    const inputProjectRight = document.createElement('div');
    inputProjectRight.classList.add('input-project-right');

    const addProjectButton = document.createElement('div');
    addProjectButton.id = 'add-project-button';

    const check = document.createElement('img');
    check.src = '../src/images/check.svg';

    const cancelAddProject = document.createElement('div');
    cancelAddProject.id = 'cancel-add-project';

    const deleteImg = document.createElement('img');
    deleteImg.src = '../src/images/delete.svg';

    const appendNewProjectInput = () => {

        projecstList.appendChild(inputProject);

        inputProject.appendChild(inputContainer);
        inputProject.appendChild(inputProjectRight);

        inputContainer.appendChild(project);

        inputProjectRight.appendChild(addProjectButton);
        inputProjectRight.appendChild(cancelAddProject);

        addProjectButton.appendChild(check);

        cancelAddProject.appendChild(deleteImg);
    };

    const newProject = document.getElementById('new-project');
    newProject.addEventListener('click', appendNewProjectInput);

    const removeInputProject = () => {
        if (projecstList.contains(inputProject)){
            project.value = '';
            projecstList.removeChild(inputProject);
        }
    }

    addProjectButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (project.value !== ''){
            Projects.addProjectToArray(project.value);
        }
        removeInputProject();
    });

    cancelAddProject.addEventListener('click', (e) => {
        e.preventDefault();
        removeInputProject();
    });
})();

export { newProject }