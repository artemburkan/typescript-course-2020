import axios from "axios"

const url = "http://jsonplaceholder.typicode.com/todos/1"

interface Todo {
    id: number
    title: string
    completed: boolean
}

axios
    .get<Todo>(url)
    .then((response) => {
        const { data: todo } = response

        console.log(`
          The todo with id: ${todo.id}.
          Has todo with title: ${todo.title}
          The todo with completed: ${todo.completed}
        `)
    })
    .catch((error) => {
        console.log(`Error message: ${error}`)
    })
