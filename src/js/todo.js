'use strict'

const ul = document.querySelector("ul")
const form = document.querySelector("form")
const input = document.querySelector("form > input")

const todos = [
  {
    text: "I'm a simple todo",
    done: true
  },
  {
    text: "Made with javascript",
    done: false
  }
]

form.addEventListener("submit", event => {
  event.preventDefault();
  const value = input.value;
  input.value = "";
  addTodo(value)
});

const displayTodo = () => {
  const todosNode = todos.map((todo, index) => {
    if (todo.editMode) {
      return createTodoEditElement(todo, index)
    } else {
      return createTodoElement(todo, index)
    }
  })
  ul.innerHTML = ""
  ul.append(...todosNode)
}

const createTodoElement = (todo, index) => {
  const li = document.createElement("li")

  const btnDelete = document.createElement('button')
  btnDelete.innerHTML = 'Delete'
  btnDelete.addEventListener('click', event => {
    event.stopPropagation()
    deleteTodo(index)
  })

  const btnEdit = document.createElement('button')
  btnEdit.innerHTML = 'Edit'
  btnEdit.addEventListener('click', event => {
    event.stopPropagation()
    toggleEditMode(index)
  })

  li.innerHTML = `
    <span class="todo ${todo.done ? "done" : ""}"></span>
    <p>${todo.text}</p>
  `

  li.addEventListener('click', (event) => {
    toggleTodo(index)
  })
  li.append(btnEdit, btnDelete)
  return li
}

const createTodoEditElement = (todo, index) => {
  const li = document.createElement('li')

  const input = document.createElement('input')
  input.type = 'text'
  input.value = todo.text

  const btnSave = document.createElement('button')
  btnSave.innerText = 'Save'
  btnSave.addEventListener('click', event => {
    event.stopPropagation()
    editTodo(index, input)
  })

  const btnCancel = document.createElement('button')
  btnCancel.innerText = 'Cancel'
  btnCancel.addEventListener('click', event => {
    event.stopPropagation()
    toggleEditMode(index)
  })

  li.append(input, btnCancel, btnSave)
  return li
}

const addTodo = text => {
  todos.push({
    text,
    done: false
  });
  displayTodo();
};

const deleteTodo = (index) => {
  todos.splice(index, 1)
  displayTodo()
}

const toggleTodo = (index) => {
  todos[index].done = !todos[index].done
  displayTodo()
}

const toggleEditMode = (index) => {
  todos[index].editMode = !todos[index].editMode
  displayTodo()
}

const editTodo = (index, input) => {
  const value = input.value
  todos[index].text = value
  todos[index].editMode = false
  displayTodo()
}

displayTodo()