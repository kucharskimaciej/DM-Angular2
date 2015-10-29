import {Component, Input, NgFor} from 'angular2/angular2';
import {TodoComponent} from './todo';
import {TodoModel} from '../services/todo';

@Component({
    selector: 'list',
    directives: [TodoComponent, NgFor],
    template: `
        <ul class="list-group">
            <li *ng-for="#item of items"
                class="list-group-item">
                <todo [todo]="item"></todo>
            </li>
        </ul>
    `
})
export class ListComponent {
    @Input() items: Array<TodoModel>;
}