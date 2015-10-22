import {View, Component, FORM_DIRECTIVES, NgFor, Inject} from 'angular2/angular2';
import {Validators, FormBuilder} from 'angular2/angular2';
import {TodoModel, TodoService} from '../todo_service';
import {EnumPipe} from '../helpers/array_from_enum_pipe';



@Component({
    selector: 'item-form'
})

@View({
    directives: [FORM_DIRECTIVES, NgFor],
    pipes: [EnumPipe],
    template: `
        <form (ng-submit)="submit(todoForm)" [ng-form-model]="todoForm">
            <input type="text" ng-control="title"/>
            <select ng-control="priority">
                <option *ng-for="#val of priority | arrayFromEnum" [value]="val">{{ val }}</option>
            </select>
            <button type="submit">Add</button>
        </form>
    `
})

export class ItemFormComponent {
    public priority = TodoModel.Priority;
    public todoForm: ControlGroup;

    constructor(
        private todoService: TodoService,
        @Inject(FormBuilder) builder
    ) {
        this.todoForm = builder.group({
           title: [this.defaults.title, Validators.required],
           priority: [this.defaults.priority /* no validation required */],
        });
    }


    submit(form): void {
        let {title, priority} = form.value;
        if(form.valid) {
            this.todoService.add( new TodoModel(title, TodoModel.Priority[priority]) );

            form.controls.title.updateValue(this.defaults.title);
            form.controls.priority.updateValue(this.defaults.priority);
        }
    }

    get defaults() {
        return {
            title: "",
            priority: TodoModel.Priority[TodoModel.Priority.A]
        }
    }
}