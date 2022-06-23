import { displayTask } from './displaytask.js';
import { Projects } from './projects.js';

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
        Projects.determineSelectedProject().push(task);
        console.log(Projects.projectsArray.projectsList);
        displayTask(task);
        return {task}
    } 

    const prohibitDuplicateTitles = (thisTask) => {
        let duplicateTitles = Projects.determineSelectedProject().filter(obj => {
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

    
    return { newTask, prohibitDuplicateTitles }
})();

export { makeTask }