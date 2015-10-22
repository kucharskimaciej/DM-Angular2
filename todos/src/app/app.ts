/// <reference path="../../typings/angular2/angular2.d.ts"/>
import {
    View,
    Component,
    bootstrap
} from 'angular2/angular2';


import {ListComponent} from './todo_list';
import {TodoService, TodoModel, TodoPriority} from './todo_service';
import {ItemFormComponent} from './todo_form/item_form_component';

import * as ng2 from 'angular2/angular2';
console.log(ng2);

@View({
    directives: [ListComponent, ItemFormComponent],
    template: `
        <header>
            <h1>Devmeetings Angular2</h1>
        </header>
        <list [items]="todos"></list>
        <item-form></item-form>
    `
})

@Component({
    selector: 'todo-app'
})
export class TodoApp {
    public todos:Array<TodoModel>;
    constructor(
        todoService: TodoService
    ) {
        this.todos = todoService.todos;
        console.log(this.todos);
    }
}

bootstrap(TodoApp, [TodoService]);