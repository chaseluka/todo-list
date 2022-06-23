import { makeTask } from './maketask.js';
import { editTask } from './edittask.js';
import { completeTask } from './completetask.js';
import { Projects } from './projects.js';

const displayTask = (task) => {
    const addDataTitle = (row) => {
        if (makeTask.prohibitDuplicateTitles(task).thisTask.duplicateTitle !== ''){
            return row.setAttribute('data-task', `${task.duplicateTitle}`);
        }
        else {
            return row.setAttribute('data-task', `${task.title}`);
        }
    }
    if (task.title !== '' && task.projectTitle === undefined){
        const taskList = document.querySelector('.task-list');

        const row = document.createElement('div');
        row.classList.add('row');
        addDataTitle(row);
        taskList.appendChild(row);

        const rowLeft = document.createElement('div');
        const rowRight = document.createElement('div');
        rowLeft.classList.add('row-left');
        rowRight.classList.add('row-right');

        row.appendChild(rowLeft);
        row.appendChild(rowRight);

        const circle = document.createElement('img');
        circle.src = '../src/images/blank-circle.svg';

        rowLeft.appendChild(circle);

        const taskContainer = document.createElement('div');
        taskContainer.classList.add('task');

        rowLeft.appendChild(taskContainer);

        const title = document.createElement('div');
        title.textContent = task.title;
        title.classList.add('task-title');

        if (task.priority !== 'none'){
            const taskTitleContainer = document.createElement('div');
            taskTitleContainer.classList.add('task-title-container');
            
            taskContainer.appendChild(taskTitleContainer);

            const priorityDisplay = document.createElement('div');
            taskTitleContainer.appendChild(priorityDisplay);

            taskTitleContainer.appendChild(title);

            if (task.priority === 'low'){
                priorityDisplay.textContent = '!';
                priorityDisplay.classList.add('low');
            }
            else if (task.priority === 'medium'){
                priorityDisplay.textContent = '!!';
                priorityDisplay.classList.add('medium');
            }
            else if (task.priority === 'high'){
                priorityDisplay.textContent = '!!!';
                priorityDisplay.classList.add('high');
            }
        }
        else {
            taskContainer.appendChild(title);
        }

        if (task.notes !== ''){
            const notes = document.createElement('div');
            notes.textContent = task.notes;
            notes.classList.add('task-notes');
            taskContainer.appendChild(notes);
        }
        if (task.date !== ''){
            const date = document.createElement('div');
            date.textContent = task.date;
            date.classList.add('task-date');
            taskContainer.appendChild(date);
        }

        const edit = document.createElement('img');
        edit.src = '../src/images/edit.svg';

        const deleteImg = document.createElement('img');
        deleteImg.src = '../src/images/delete.svg';

        rowRight.appendChild(edit);
        rowRight.appendChild(deleteImg);

        deleteImg.addEventListener('click', (e) => {
            const deleteTask = e.target.parentElement.parentElement;
            taskList.removeChild(deleteTask);

            Projects.deleteTaskfromLibrary(deleteTask.getAttribute('data-task'));
        });

        edit.addEventListener('click', (e) => editTask(e));

        circle.addEventListener('click',  (e) => completeTask(e));
    }
    
}

export { displayTask }