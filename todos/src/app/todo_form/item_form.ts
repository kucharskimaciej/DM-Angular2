import {View, Component, FORM_DIRECTIVES, NgFor} from 'angular2/angular2';
import {TodoModel, TodoService} from '../todo_service';
import {EnumPipe} from '../helpers/array_from_enum_pipe';


@Component({
    selector: 'item-form'
})

@View({
    directives: [FORM_DIRECTIVES, NgFor],
    pipes: [EnumPipe],
    template: `
        <form (ng-submit)="submit()">
            <input type="text" [(ng-model)]="model.title"/>
            <select [(ng-model)]="model.priority">
                <option *ng-for="#val of priority | arrayFromEnum" [value]="val">{{ val }}</option>
            </select>
            <button type="submit">Add</button>
        </form>
    `
})

export class ItemFormComponent {
    public model:TodoModel;
    public priority = TodoModel.Priority;

    constructor(
        private todoService: TodoService
    ) {
        this.reset();
    }

    reset(): void {
        this.model = new TodoModel("");
    }
    submit(): void {
        this.todoService.add(this.model);
        this.reset();
    }
}