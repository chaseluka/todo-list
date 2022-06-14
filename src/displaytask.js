import { makeTask } from './maketask.js';
import { inputTaskDOMDisplay } from './addtodo.js';
import { editTask } from './edittask.js';


const displayTask = (task) => {
    const prohibitDuplicateTitles = (thisTask) => {
        let duplicateTitles = makeTask.taskLibrary.tasks.filter(obj => {
            if (obj.duplicateTitle !== ''){
                return obj.duplicateTitle === thisTask.duplicateTitle
            }
            else return obj.title === thisTask.title;
        });
        if (duplicateTitles.length > 1){
            thisTask.duplicateTitle = Math.random()*100;
            let duplicated = thisTask;
            prohibitDuplicateTitles(duplicated);
        }
        console.log(makeTask.taskLibrary.tasks);
        return { duplicateTitles, thisTask}
    }

    const addDataTitle = (row) => {
        if (prohibitDuplicateTitles(task).thisTask.duplicateTitle !== ''){
            return row.setAttribute('data-task', `${task.title}${prohibitDuplicateTitles(task).thisTask.duplicateTitle}`);
        }
        else {
            return row.setAttribute('data-task', `${task.title}`);
        }
    }

    const deleteTaskfromLibrary = (deleteThis) => {
        makeTask.taskLibrary.tasks = makeTask.taskLibrary.tasks.filter(obj => {
            if (obj.duplicateTitle !== ''){
                return obj.duplicateTitle !== deleteThis
            }
            else return obj.title !== deleteThis
        });
        console.log(makeTask.taskLibrary.tasks);
    }

    if (task.title !== ''){
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

        const blankCircle = document.createElement('img');
        blankCircle.src = '../src/images/blank-circle.svg';

        rowLeft.appendChild(blankCircle);

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

            deleteTaskfromLibrary(deleteTask.getAttribute('data-task'));
        });

        edit.addEventListener('click', (e) => editTask(e))
        return { deleteTaskfromLibrary }
    }
    return { deleteTaskfromLibrary }
}

export { displayTask }