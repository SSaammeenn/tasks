document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');

    function addTask(taskText) {
        const taskItem = document.createElement('li');
        taskItem.className = 'flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg shadow';

        const taskTextSpan = document.createElement('span');
        taskTextSpan.textContent = taskText;
        taskTextSpan.className = 'flex-grow';

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.className = 'text-blue-500 hover:text-blue-700 focus:outline-none mr-2';
        editButton.addEventListener('click', () => {
            const newTaskText = prompt('Edit task', taskTextSpan.textContent);
            if (newTaskText) {
                taskTextSpan.textContent = newTaskText;
            }
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'text-red-500 hover:text-red-700 focus:outline-none';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });

        taskItem.appendChild(taskTextSpan);
        taskItem.appendChild(editButton);
        taskItem.appendChild(deleteButton);

        taskList.appendChild(taskItem);
    }

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskButton.click();
        }
    });
});
