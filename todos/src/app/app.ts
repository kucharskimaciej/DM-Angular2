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


@Component({
    selector: 'todo-app',
    directives: [ListComponent, ItemFormComponent],
    template: `
        <header class="row">
            <h1 class="col-sm-12 text-center">Devmeetings Angular2</h1>
        </header>
        <div class="row">
            <div class="col-sm-12">
                <list [items]="todos"></list>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <item-form></item-form>
            </div>
        </div>

    `
})
export class TodoApp {
    public todos:Array<TodoModel>;
    constructor(
        todoService: TodoService
    ) {
        this.todos = todoService.todos;
    }
}

bootstrap(TodoApp, [TodoService]);