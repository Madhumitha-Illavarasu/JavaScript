
class Todo {
    constructor(title) {
        Todo.idx++
        this.id = Todo.idx
        this.title = title
        this.completed = false
    }
}
Todo.idx = 0;

// service
class TodoService {
    constructor() {
        this.todos = []
    }
    addTodo(title) {
        let newTodo = new Todo(title)
        this.todos = this.todos.concat(newTodo)
    }
    editTodo(idx, title) {
        let edit = this.todos.find(todo => todo.id === idx)
        edit.title = title
    }
    completeTodo(id) {
        let todo = this.todos[id]
        todo.completed = true
    }
    deleteTodo(idx, idx1) {
        this.todos = this.todos.splice(idx, idx1)
    }
    completeAll() {
        let temp = this.todos.every(todo => todo.completed)
        for (let i = 0; i < this.todos.length; i++) {
            if (this.todos[i].completed === false) {
                this.todos[i].completed = !temp
            }

        }
    }
    viewTodos(flag) {

        if (flag === "ALL")
            this.todos.forEach(todo => console.log(todo))
            if (flag === "Active")
            this.todos.filter(todo => !todo.completed).forEach(todo => console.log(todo))
        if (flag === "Completed")
            this.todos.filter(todo => todo.completed).forEach(todo => console.log(todo))

    }
    clearCompleted() {
        for (let i = 0; i < this.todos.length; i++) {
            if (this.todos[i].completed === true) {
                delete this.todos[i]
            }

        }
    }

}


let service = new TodoService();
console.log("ADD")
service.addTodo("go to BLT")
service.addTodo("go to ROOM")
service.addTodo("go to class")
service.viewTodos('ALL')
service.editTodo(1, "go to park")
service.viewTodos('ALL')

service.deleteTodo(1, 1)
service.viewTodos('ALL')
service.completeTodo(1)

service.clearCompleted()
service.completeAll()



