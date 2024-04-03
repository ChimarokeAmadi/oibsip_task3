const taskId = document.getElementById('task_id');
const taskDescription = document.getElementById('task_description');
const listContainer = document.getElementById('list_container');

function addTask() {
    if (taskId.value === '' || taskDescription.value === ''){
        alert("Please fill the required inputs first.");
        saveData();
    } else{
        let li = document.createElement("li");
        li.innerHTML = "<div>" + "<p>" + taskId.value + "</p>" + "<p>" + taskDescription.value + "</p>" + "<button id = 'delete'>X</button>";
        listContainer.appendChild(li);
        saveData();
    }
    taskId.value = '';
    taskDescription.value = '';
    saveData();
}

listContainer.addEventListener('click', function(evt) {
    if(evt.target.tagName === 'LI') {
        evt.target.classList.toggle('checked');
        saveData();
    }
    else if(evt.target.tagName === 'BUTTON') {
        let listItem = evt.target.closest('li');
        listItem.remove();
        saveData();
    }
});

function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}

function showTasks(){
    listContainer.innerHTML = localStorage.getItem('data');
}

showTasks();