let root = document.querySelector(':root')
let container = document.querySelector('.container');
let newTaskInput = document.getElementById('new_task_input')
let taskform = document.getElementById('new_task_form');
let tasksList = document.getElementById('tasksList');
let taskBtns = document.querySelectorAll('.task_check_btn');

taskform.addEventListener('submit', function (e) {

    e.preventDefault();
    let newtaskInputValue = taskform.elements.new_task_input;


    addTask(newtaskInputValue.value)


    newtaskInputValue.value = '';
    container.classList.remove('task_list_empty')


})


function addTask(newTask) {


    const newTaskItem = document.createElement('li');
    newTaskItem.setAttribute('class', 'task_item');



    const newCheckBtn = document.createElement('div');
    newCheckBtn.setAttribute('class', 'task_check_btn')


    const newTaskBio = document.createElement('span');
    newTaskBio.setAttribute('class', 'task_bio')


    newTaskBio.innerText = newTask; 


    tasksList.appendChild(newTaskItem)


    newTaskItem.appendChild(newTaskBio)


    onTaskComplete(newCheckBtn)

}

function onTaskComplete(btns) {

    btns.addEventListener('click', function (e) {
        var parent = e.toElement.parentElement;
        parent.classList.add('task-completed'); 
        setTimeout(() => {
            parent.remove();
        }, 400);


        if (tasksList.childNodes.length == 1) {
            setTimeout(() => {
                container.classList.add('task_list_empty')
                
            }, 800);
        }

    })


}