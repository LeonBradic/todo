document.querySelector('form').addEventListener('submit', handleSubmitForm);

document.querySelector('ul').addEventListener('click', handleClickDeleteOrCheck);

document.getElementById('clearAll').addEventListener('click', handleClearAll);

function handleSubmitForm(e) {
    e.preventDefault();
    let input = document.querySelector('input');
    if (input.value != '') {
        addTodo(input.value);
    }
    input.value = '';
}

function handleClickDeleteOrCheck(e) {
    if (e.target.name == 'checkButton') {
        checkTodo(e);
    }

    if(e.target.name == 'deleteButton') {
        deleteTodo(e);
    }
}

function handleClearAll(e) {
    document.querySelector('ul').innerHTML = '';
}

function addTodo(todo) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.contentEditable = "true";
    
    li.innerHTML = `
        <span class="todoItem">${todo}</span>
        <span class="date">${document.querySelector("#date").value}</span>
        <button name="checkButton"><i class="fas fa-check"></i></button>
        <button name="deleteButton"><i class="fas fa-trash"></i></button>
    `;

    li.classList.add('todoListItem');
    ul.appendChild(li);
}

function checkTodo(e) {
    let item = e.target.parentNode;
    if(item.style.textDecoration == 'line-through') {
        item.style.textDecoration = 'none';
    }
    else {
        item.style.textDecoration = 'line-through';
    }
}

function deleteTodo(e) {
    let item = e.target.parentNode;

    item.remove();
}
/*
function store {
    localStorage.setItem('input', document.querySelector('input').value);
    localStorage.setItem('ul', document.querySelector('ul').value);
    localStorage.setItem('li', document.querySelector('li').value);
    localStorage.setItem('item', document.querySelector('item').value);
}*/