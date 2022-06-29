

const displayCompletedTasksOnDOM = (task) => {
    const newTask = document.getElementById('new-task');
    newTask.style.display = 'none';
    

    const taskList = document.querySelector('.task-list');

    const row = document.createElement('div');
    row.classList.add('row');
    taskList.appendChild(row);

    const rowLeft = document.createElement('div');
    rowLeft.classList.add('row-left');

    row.appendChild(rowLeft);

    const circle = document.createElement('img');
    circle.src = '../src/images/checked-circle.svg';

    rowLeft.appendChild(circle);

    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task');

    rowLeft.appendChild(taskContainer);
    const title = document.createElement('div');
    title.textContent = task[0].title;
    title.classList.add('task-title');

    if (task[0].priority !== 'none'){
        const taskTitleContainer = document.createElement('div');
        taskTitleContainer.classList.add('task-title-container');
        
        taskContainer.appendChild(taskTitleContainer);

        const priorityDisplay = document.createElement('div');
        taskTitleContainer.appendChild(priorityDisplay);

        taskTitleContainer.appendChild(title);

        if (task[0].priority === 'low'){
            priorityDisplay.textContent = '!';
            priorityDisplay.classList.add('low');
        }
        else if (task[0].priority === 'medium'){
            priorityDisplay.textContent = '!!';
            priorityDisplay.classList.add('medium');
        }
        else if (task[0].priority === 'high'){
            priorityDisplay.textContent = '!!!';
            priorityDisplay.classList.add('high');
        }
    }
    else {
        taskContainer.appendChild(title);
    }

    if (task[0].notes !== ''){
        const notes = document.createElement('div');
        notes.textContent = task[0].notes;
        notes.classList.add('task-notes');
        taskContainer.appendChild(notes);
    }
    if (task[0].date !== ''){
        const date = document.createElement('div');
        date.textContent = task[0].date;
        date.classList.add('task-date');
        taskContainer.appendChild(date);
    }
}

export { displayCompletedTasksOnDOM }