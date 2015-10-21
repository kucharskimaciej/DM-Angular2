import {View, Component, Input} from 'angular2/angular2';
import {TodoModel, TodoPriority} from './todo_service';

@Component({
    selector: 'todo',
    template: `
        {{ todo.title }} -- {{ todo.priority }}
    `
})
export class TodoComponent {
    @Input() todo:TodoModel;

}
