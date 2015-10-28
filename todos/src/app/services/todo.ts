import {Injectable} from 'angular2/angular2';

export enum TodoPriority {A, B, C}

export class TodoModel {
    static Priority = TodoPriority;

    constructor(
        public title:string,
        private _priority:TodoPriority = TodoModel.Priority.A,
        public completed: boolean = false) {}


    get priority(): string {
        return TodoPriority[this._priority];
    }

    set priority(val: string) {
        this._priority = TodoPriority[val];
    }

}
export class TodoService {
    todos:Array<TodoModel>;

    constructor() {
        this.todos = [
            new TodoModel("Drink beer", TodoModel.Priority.A, true),
            new TodoModel("Someday meet people", TodoModel.Priority.C),
            new TodoModel("Learn JS"),
        ];
    }

    add(model: TodoModel): void {
        this.todos.push(model);
    }
}