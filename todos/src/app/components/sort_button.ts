import {
    Component,
    Input,
    Output,
    EventEmitter
} from 'angular2/angular2';

@Component({
    selector: 'sort',
    directives: [],
    template: `
        <button class="btn btn-sm"
                [class.btn-default]="!active"
                [class.btn-primary]="active"
                (click)="onClick()">

            <i  class="glyphicon"
                [class.glyphicon-chevron-down]="!reversed"
                [class.glyphicon-chevron-up]="reversed"></i>
            {{ prop }}

        </button>
    `
})
export class SortButtonComponent {
    @Input() prop:string;
    @Input() active: boolean;
    @Output() sort: EventEmitter = new EventEmitter();

    public reversed: boolean = false;

    onClick() {
        this.reversed = !this.reversed;
        this.sort.next({
            prop: this.prop, reversed: this.reversed
        });
    }
}

export interface ISort {
    prop:string;
    reversed: boolean;
}
