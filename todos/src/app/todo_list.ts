import {View, Component, Input, NgFor} from 'angular2/angular2';
import {TodoComponent} from './todo';
import {TodoModel, TodoPriority} from './todo_service';


@View({
    directives: [TodoComponent, NgFor],
    template: `
        <ul class="list-group">
            <li *ng-for="#item of items" class="list-group-item">
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
}