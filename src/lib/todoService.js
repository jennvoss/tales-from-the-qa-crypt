const baseUrl = process.env.REACT_APP_MOCK_API

export const loadTodos = () => {
  return fetch(baseUrl + 'todos')
    .then(res => res.json())
}

export const createTodo = (todo) => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  }).then(res => res.json())
}

export const saveTodo = (todo) => {
  return fetch(`${baseUrl}/${todo.id}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  }).then(res => res.json())
}

export const destroyTodo = (id) => {
  return fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}
