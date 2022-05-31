const createTodo = (title, notes, dueDate, priority, checklist) => {
    return {title, notes, dueDate, priority, checklist}
}

const newTodo = () => {
    const todo = createTodo(
        document.getElementById('title').value,
        document.getElementById('notes').value,
        document.getElementById('due-date').value,
        getSelectedRadioBtn(),
        document.getElementById('checklist').checked
    );
    console.log(todo);
    return {todo}
} 

const getSelectedRadioBtn = () => {
    const priorityList = document.getElementsByName('priority');

    for(i = 0; i < priorityList.length; i++){
        if (priorityList[i].checked){
            return priorityList[i].value
        }
    }
}

const addTodoBtn = document.getElementById('btn');
addTodoBtn.addEventListener('click', newTodo);