import {View, Component, Input, NgFor} from 'angular2/angular2';
import {TodoComponent} from './todo';
import {TodoModel, TodoPriority} from './todo_service';


@View({
    directives: [TodoComponent, NgFor],
    template: `
        <section>
            {{ todo.title }}
        </section>
    `
})

@Component({
    selector: 'list'
})

export class ListComponent {
    @Input() items: Array<TodoModel>;

    constructor() {
        console.log(this.items)
    }
}