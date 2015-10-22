import {View, Component, Input, NgFor} from 'angular2/angular2';
import {TodoComponent} from './todo';
import {TodoModel, TodoPriority} from './todo_service';


@View({
    directives: [TodoComponent, NgFor],
    template: `
        <ul>
            <li *ng-for="#item of items">
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