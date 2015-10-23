import {View, Component, Input, Output, EventEmitter} from 'angular2/angular2';

@Component({
    selector: 'sort',
    directives: [],
    template: `
        <button class="btn btn-lg btn-default" (click)="onClick()">
            {{ reversed }} {{ prop }}
        </button>
    `
})
export class SortButtonComponent {
    @Input() prop:string;
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
