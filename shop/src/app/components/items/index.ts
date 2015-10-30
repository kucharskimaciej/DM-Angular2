import {
    Component,
    NgFor,
    FORM_DIRECTIVES
} from 'angular2/angular2';


import {DataService, Item} from '../../services/data';
import {SortPipe} from '../../pipes/sort';
import {FilterPipe} from '../../pipes/filter';

import {SortButtonComponent, ISort} from '../common/sort_button';
import {ItemComponent} from './partials/item';

@Component({
    selector: 'home',
    directives: [NgFor, FORM_DIRECTIVES, SortButtonComponent, ItemComponent],
    pipes: [SortPipe, FilterPipe],
    template: `
        <div class="row">
            <div class="col-xs-12 l-island">
                <input type="text" class="form-control" [(ng-model)]="filtering" placeholder="Search..." />
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 l-island">
                <sort
                    [prop]="'title'"
                    [active]="sorting.prop === 'title'"
                    (sort)="onSort($event)"></sort>

                <sort
                    [prop]="'price'"
                    [active]="sorting.prop === 'price'"
                    (sort)="onSort($event)"></sort>
            </div>
        </div>
        <div class="row items">
            <div class="col-xs-4" *ng-for="#item of (items | filter:filtering) | sort:sorting.prop:sorting.reversed">
                <item [item]="item"></item>
            </div>
        </div>

    `
})
export class ItemsIndexComponent {
    public items:Array<Item>;
    public sorting:ISort = {
        prop: null,
        reversed: true
    };

    public filtering:string = "";

    constructor(private todoService:DataService) {
        this.items = todoService.items;
    }

    onSort(sort:ISort):void {
        Object.assign(this.sorting, sort);
    }
}

