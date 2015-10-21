/// <reference path="../../typings/angular2/angular2.d.ts"/>
import {View, Component, bootstrap} from 'angular2/angular2';
import {ListComponent} from './todo_list';
import {TodoModel, TodoPriority} from './todo_service';

@View({
    directives: [ListComponent],
    template: `
        <header>
            <h1>Devmeetings Angular2</h1>
        </header>
        <section>
            <list [items]="todos" />
        </section>

    `
})

@Component({
    selector: 'todo-app'
})
export class TodoApp {
    name:string = "Maciej!";
    todos:Array<TodoModel> = [
        new TodoModel("Drink beer", TodoPriority.A),
        new TodoModel("Learn JS", TodoPriority.A),
        new TodoModel("Meet people", TodoPriority.C),
    ];

    constructor() {
        console.log(this.todos)
    }
}

bootstrap(TodoApp);