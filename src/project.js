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
    projectPage(){
        if(this.arrayOfTodos.length > 0){
            for(let i = 0; i < this.arrayOfTodos.length ; i++){
                let newTodoItem = document.createElement("div");
                newTodoItem.innerHTML = `
                <p> Title: ${this.arrayOfTodos[i].title}</p>
                <p> Description : ${this.arrayOfTodos[i].description}</p>
                <p> Due Date: ${this.arrayOfTodos[i].dueDate}</p>
                <p> Priority: ${this.arrayOfTodos[i].priority}</p>
                `   ;
                newTodoItem.classList.add("task-card");
                document.getElementById("task-container").appendChild(newTodoItem);
            }
        }

    }
}