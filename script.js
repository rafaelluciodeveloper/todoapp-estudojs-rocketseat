var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
  listElement.innerHTML = '';
  for (todo of todos) {
    var todoElement = document.createElement('li');
    todoElement.setAttribute(
      'class',
      'list-group-item list-group-item-action d-flex justify-content-between align-items-center'
    );
    var todoText = document.createTextNode(todo);
    var linkElement = document.createElement('a');
    linkElement.setAttribute('href', '#');
    var pos = todos.indexOf(todo);
    linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');
    linkElement.setAttribute('class', 'btn btn-sm btn-danger');

    var linkText = document.createTextNode('Excluir');

    linkElement.appendChild(linkText);
    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);
    listElement.appendChild(todoElement);
  }
}

function addTodo() {
  var textTodo = inputElement.value;
  todos.push(textTodo);
  inputElement.value = '';
  renderTodos();
  saveStorage();
}

function deleteTodo(pos) {
  todos.splice(pos, 1);
  renderTodos();
  saveStorage();
}

function saveStorage() {
  localStorage.setItem('list_todos', JSON.stringify(todos));
}

buttonElement.onclick = addTodo;

renderTodos();
