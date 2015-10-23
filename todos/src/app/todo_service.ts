import {Injectable} from 'angular2/angular2';

export enum TodoPriority {A, B, C}

export class TodoModel {
    static Priority = TodoPriority;
    public completed: boolean;

    constructor(
        public title:string,
        private _priority:TodoPriority = TodoModel.Priority.A,
        completed?: boolean) {

        this.completed = completed || false;
    }


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
            new TodoModel("Learn JS", TodoModel.Priority.A),
            new TodoModel("Meet people", TodoModel.Priority.C),
        ];
    }

    add(model: TodoModel): void {
        this.todos.push(model);
    }
}