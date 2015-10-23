import {View, Component, Input, FORM_DIRECTIVES} from 'angular2/angular2';
import {Control, Validators} from 'angular2/angular2';
import {TodoModel, TodoPriority} from './todo_service';

@Component({
    selector: 'todo',
    directives: [FORM_DIRECTIVES],
    template: `
        <span [hidden]="editing">
            <input type="checkbox" [(ng-model)]="todo.completed" />
            {{ todo.title }}
        </span>
        <span [hidden]="!editing">
             <input type="text"
                    [(ng-model)]="todo.title"
                    [ng-form-control]="title"/>
        </span>

        <span   class="label"
                [class.label-danger]=" todo.priority === 'A'"
                [class.label-warning]="todo.priority === 'B'"
                [class.label-success]="todo.priority === 'C'">{{ todo.priority }}
        </span>
        <button class="btn-xs pull-right"
                [class.btn-info]="!editing"
                [class.btn-success]="editing"
                [disabled]="!title.valid"
                (click)="toggle()">

            <span [hidden]="editing">edit</span>
            <span [hidden]="!editing">save</span>
        </button>
    `
})
export class TodoComponent {
    @Input() todo:TodoModel;

    public editing: boolean = false;
    public title: Control = new Control('', Validators.required);

    toggle() {

        this.editing = !this.editing;
    }
}
