/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
    constructor() {
        this.todo = [];
    }
    add(todo){
        this.todo.push(todo);
    }
    remove(todo){
        this.todo.splice(todo,1);
    }
    update(index,todo){
        this.todo.splice(index,0,todo);
    }
    getAll(){
        return this.todo;
    }
    get(index){
        return this.todo[index];
    }
    clear(){
        this.todo = [];
    }
}

module.exports = Todo;
