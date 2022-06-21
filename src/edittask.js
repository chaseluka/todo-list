
import { inputTaskDOMDisplay } from './addtodo.js';
import { makeTask } from './maketask.js';

const editTask = (e) => {
    const row = e.target.parentElement.parentElement;
    const taskList = document.querySelector('.task-list');
    taskList.removeChild(row);

    inputTaskDOMDisplay.appendTask();

    const getTaskInfo = () => {
        let taskInfo = makeTask.taskLibrary.tasks.filter(task => {
            if (task.duplicateTitle !== ''){
                return task.duplicateTitle === row.getAttribute('data-task');
            }
            else return task.title === row.getAttribute('data-task');
        });
        return { taskInfo }
    }

    inputTaskDOMDisplay.title.value = getTaskInfo().taskInfo[0].title;
    inputTaskDOMDisplay.notes.value = getTaskInfo().taskInfo[0].notes;
    inputTaskDOMDisplay.date.value = getTaskInfo().taskInfo[0].date;

    makeTask.deleteTaskfromLibrary(row.getAttribute('data-task'));

}

export { editTask }