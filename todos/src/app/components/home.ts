import {
    Component,
    NgFor,
    FORM_DIRECTIVES
} from 'angular2/angular2';


import {ListComponent} from './todo_list';
import {TodoService, TodoModel, TodoPriority} from '../services/todo';
import {SortButtonComponent, ISort} from './sort_button';
import {SortPipe} from '../pipes/sort';
import {FilterPipe} from '../pipes/filter';

@Component({
    selector: 'home',
    directives: [ListComponent, SortButtonComponent, NgFor, FORM_DIRECTIVES],
    pipes: [SortPipe, FilterPipe],
    template: `
        <div class="row">
            <div class="col-xs-12 l-island">
                <input type="text" class="form-control" [(ng-model)]="filtering" placeholder="Search..." />
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 l-island">
                <sort *ng-for="#prop of sortingProps"
                    [prop]="prop"
                    [active]="sorting.prop === prop"
                    (sort)="onSort($event)"></sort>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <list [items]="(todos | filter:filtering) | sort:sorting.prop:sorting.reversed"></list>
            </div>
        </div>

    `
})
export class HomeComponent {
    public todos:Array<TodoModel>;
    public sortingProps:Array<string> = ["title", "priority"];
    public sorting:ISort = {
        prop: this.sortingProps[0],
        reversed: false
    };

    public filtering:string = "";

    constructor(private todoService:TodoService) {
        this.todos = todoService.todos;
    }

    onSort(sort:ISort):void {
        Object.assign(this.sorting, sort);
    }
}

