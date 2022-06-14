
import { makeTask } from './maketask.js';

const completeTask = (e) => {
    const row = e.target.parentElement.parentElement;
    const taskList = document.querySelector('.task-list');
    


    e.target.src = '../src/images/checked-circle.svg';

    setTimeout(() => {
        row.classList.add('out');
    }, "3500");

    setTimeout(() => {
        makeTask.deleteTaskfromLibrary(row.getAttribute('data-task'));
        taskList.removeChild(row);
    }, "6000");
    
}

export { completeTask }