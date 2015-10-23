import {View, Component, FORM_DIRECTIVES, NgFor, Inject} from 'angular2/angular2';
import {Validators, FormBuilder, ControlGroup} from 'angular2/angular2';
import {TodoModel, TodoService} from '../todo_service';
import {EnumPipe} from '../helpers/array_from_enum_pipe';



@Component({
    selector: 'item-form'
})

@View({
    directives: [FORM_DIRECTIVES, NgFor],
    pipes: [EnumPipe],
    template: `
        <h2 class="text-center">New task</h2>
        <form (submit)="submit(todoForm)" [ng-form-model]="todoForm" class="form-horizontal">

            <div class="form-group">
                <div class="col-xs-10">
                    <label class="control-label">Title</label>
                    <input type="text" ng-control="title" class="form-control"/>

                </div>
                <div class="col-xs-2">
                    <label class="control-label">Priority</label>
                    <select ng-control="priority" class="form-control">
                        <option *ng-for="#val of priority | arrayFromEnum" [value]="val">{{ val }}</option>
                    </select>
                </div>

            </div>
            <div class="form-group">
                <div class="col-xs-12 text-center">
                    <button type="submit" class="btn btn-success btn-lg">Yet more stuff...</button>
                </div>
            </div>

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