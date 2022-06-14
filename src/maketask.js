import { displayTask } from './displaytask.js';

const makeTask = (() => {
    const createTask = (title, notes, date, priority, duplicateTitle) => {
        return {title, notes, date, priority, duplicateTitle}
    }

    const newTask = () => {
        const task = createTask(
            document.getElementById('title').value,
            document.getElementById('notes').value,
            document.getElementById('date').value,
            document.getElementById('priority-list').value,
            '',
        );
        taskLibrary.tasks.push(task);
        displayTask(task);
        return {task}
    } 

    const prohibitDuplicateTitles = (thisTask) => {
        let duplicateTitles = makeTask.taskLibrary.tasks.filter(obj => {
            if (obj.duplicateTitle !== ''){
                return obj.duplicateTitle === thisTask.duplicateTitle
            }
            else return obj.title === thisTask.title;
        });
        if (duplicateTitles.length > 1){
            thisTask.duplicateTitle = thisTask.title + Math.random()*100;
        }
        return { duplicateTitles, thisTask}
    }

    const taskLibrary = (() => {
        let tasks = [];
        return { tasks }
    })();

    const deleteTaskfromLibrary = (deleteThis) => {
        taskLibrary.tasks = taskLibrary.tasks.filter(obj => {
            if (typeof deleteThis === 'object' && obj.duplicateTitle === ''){
                deleteThis = deleteThis.title;
            }
            else if (typeof deleteThis === 'object' && obj.duplicateTitle !== ''){
                deleteThis = deleteThis.duplicateTitle;
            }
            console.log(deleteThis);
            if (obj.duplicateTitle !== ''){
                return obj.duplicateTitle !== deleteThis
            }
            else return obj.title !== deleteThis
        });
    }
    return { newTask, taskLibrary, prohibitDuplicateTitles, deleteTaskfromLibrary }
})();

export { makeTask }