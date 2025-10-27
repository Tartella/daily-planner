document.getElementById('addTaskBtn').addEventListener('click', function(e) {
  e.preventDefault();
  const title = document.getElementById('taskTitle').value.trim();
  const description = document.getElementById('taskDescription').value.trim();

  if (!title) return;

  const task = document.createElement('div');
  task.className = 'task';
  task.innerHTML = `<h3>${title}</h3><p>${description}</p><button class='delete'>Удалить</button>`;

  document.getElementById('taskList').appendChild(task);

  document.getElementById('taskTitle').value = '';
  document.getElementById('taskDescription').value = '';

  task.querySelector('.delete').addEventListener('click', () => task.remove());
});