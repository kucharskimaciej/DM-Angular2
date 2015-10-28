export class TodoModel {
    constructor(
        public title:string,
        public priority:number = 1,
        public completed:boolean = false) {}
}


export class TodoService {
    todos:Array<TodoModel>;

    constructor() {
        this.todos = [
            new TodoModel("Drink beer", 1, true),
            new TodoModel("Someday meet people", 2),
            new TodoModel("Learn JS"),
        ];
    }

    add(model: TodoModel): void {
        this.todos.push(model);
    }
}