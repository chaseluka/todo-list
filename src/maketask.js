import { displayTask } from './displaytask.js';

const makeTask = (() => {
    const createTask = (title, notes, date, priority) => {
        return {title, notes, date, priority}
    }

    const newTask = () => {
        const task = createTask(
            document.getElementById('title').value,
            document.getElementById('notes').value,
            document.getElementById('date').value,
            document.getElementById('priority-list').value
        );
        taskLibrary.tasks.push(task);
        displayTask(task)
        return {task}
    } 

    const taskLibrary = (() => {
        let tasks = [];
        return { tasks }
    })();
    return { newTask, taskLibrary }
})();

export { makeTask }