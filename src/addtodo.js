import { makeTask } from './maketask.js';
import { displayTask } from './displaytask.js';

const inputTaskDOMDisplay = (() => {
    const taskList = document.querySelector('.task-list');
    const newTaskBtn = document.getElementById('new-task');
    const row = document.createElement('div');
    row.classList.add('row');
    
    const rowLeft = document.createElement('div');
    const rowRight = document.createElement('div');
    rowLeft.classList.add('row-left');
    rowRight.classList.add('row-right');

    const blankCircle = document.createElement('img');
    blankCircle.src = '../src/images/blank-circle.svg';
    const task = document.createElement('div');
    task.classList.add('task-title');

    const divOne = document.createElement('div');
    const divTwo = document.createElement('div');
    const divThree = document.createElement('div');
    divOne.classList.add('input-container');
    divTwo.classList.add('input-container');
    divThree.classList.add('input-container');


    const title = document.createElement('input');
    title.type = 'text';
    title.id = 'title';
    title.name = 'title';
    title.placeholder = 'Title';

    const notes = document.createElement('input');
    notes.type = 'text';
    notes.id = 'notes';
    notes.name = 'notes';
    notes.placeholder = 'Notes';

    const date = document.createElement('input');
    date.type = 'text';
    date.id = 'date';
    date.name = 'date';
    date.placeholder = 'Date due';

    const priority = document.createElement('div');
    priority.classList.add('priority');

    const priorityTitle = document.createElement('div');
    priorityTitle.textContent = 'Priority: ';

    const priorityList = document.createElement('select');
    priorityList.id = 'priority-list';
    priorityList.name = 'priority-list';

    const option1 = document.createElement('option');
    option1.value = 'none';
    option1.textContent = 'none';

    const option2 = document.createElement('option');
    option2.value = 'low';
    option2.textContent = 'low';

    const option3 = document.createElement('option');
    option3.value = 'medium';
    option3.textContent = 'medium';

    const option4 = document.createElement('option');
    option4.value = 'high';
    option4.textContent = 'high';

    const addTaskButton = document.createElement('div');
    addTaskButton.id = "add-task-button";
    const addTaskImg = document.createElement('img');
    addTaskImg.src = '../src/images/check.svg';

    const cancelAddTask = document.createElement('div');
    cancelAddTask.id = "cancel-add-task";
    const cancelTaskImg = document.createElement('img');
    cancelTaskImg.src = '../src/images/delete.svg';

    const appendTask = () => {
        removeTask();
        
        taskList.appendChild(row);

        row.appendChild(rowLeft);
        row.appendChild(rowRight);
        
        rowLeft.appendChild(blankCircle);
        rowLeft.appendChild(task);
        
        task.appendChild(divOne);
        task.appendChild(divTwo);
        task.appendChild(divThree);

        divOne.appendChild(title);
        divTwo.appendChild(notes);
        divThree.appendChild(date);
        divThree.appendChild(priority);

        priority.appendChild(priorityTitle);
        priority.appendChild(priorityList);

        
        priorityList.appendChild(option1);
        priorityList.appendChild(option2);
        priorityList.appendChild(option3);
        priorityList.appendChild(option4);

        rowRight.appendChild(addTaskButton);
        rowRight.appendChild(cancelAddTask);

        addTaskButton.appendChild(addTaskImg);
        cancelAddTask.appendChild(cancelTaskImg);

    }

    newTaskBtn.addEventListener('click', appendTask);

    
    const removeInputTask = () => {
        if (taskList.contains(row)){
            title.value = '';
            notes.value = '';
            date.value = '';
            taskList.removeChild(row);
        }
    }

    addTaskButton.addEventListener('click', (e) => {
        e.preventDefault();
        makeTask.newTask();
        removeInputTask();
    });
    
    cancelAddTask.addEventListener('click', (e) => {
        e.preventDefault();
        removeInputTask();
    });

    
    return { removeInputTask, appendTask}
})();

export { inputTaskDOMDisplay }