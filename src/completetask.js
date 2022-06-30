
import { makeTask } from './maketask.js';
import { Projects } from './projects.js';

const completeTask = (e) => {
    const row = e.target.parentElement.parentElement;
    const taskList = document.querySelector('.task-list');

    e.target.src = '../src/images/checked-circle.svg';

    setTimeout(() => {
        row.classList.add('out');
    }, "3500");

    setTimeout(() => {
        Projects.projectsArray.completedTasks.push(Projects.findTaskInProject(row.getAttribute('data-task')));
        Projects.deleteTaskfromLibrary(row.getAttribute('data-task'));
        taskList.removeChild(row);
        Projects.saveCompletedTasksData();
    }, "6000");
}

export { completeTask }