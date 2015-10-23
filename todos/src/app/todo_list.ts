import {View, Component, Input, NgFor} from 'angular2/angular2';
import {TodoComponent} from './todo';
import {TodoModel, TodoPriority} from './todo_service';
import {ISort} from './sort_button';
import {SortPipe} from './helpers/sort_pipe';

@View({
    directives: [TodoComponent, NgFor],
    pipes: [SortPipe],
    template: `
        <ul class="list-group">
            <li *ng-for="#item of items | sort:sorting.prop:sorting.reversed"
                class="list-group-item">

                <todo [todo]="item"></todo>
            </li>
        </ul>
    `
})

@Component({
    selector: 'list'
})

export class ListComponent {
    @Input() items: Array<TodoModel>;
    @Input() sorting: ISort;
}