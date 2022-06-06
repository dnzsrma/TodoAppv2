export class project{
    constructor(title){
        this.title = title;
        this.arrayOfTodos = [];
    }
    addTodo(todo) {
        this.arrayOfTodos.push(todo);
    }
    getTodos(){
        return this.arrayOfTodos;
    }
}