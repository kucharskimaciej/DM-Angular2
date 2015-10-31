import {Component, Input, FORM_DIRECTIVES, EventEmitter} from 'angular2/angular2';
import {Item} from '../../../services/data';
import {Cart} from '../../../services/cart';

@Component({
    selector: 'item',
    directives: [FORM_DIRECTIVES],
    template: `
        <article class="item thumbnail">
            <img [src]="item.pictureUrl" [alt]="item.artist + ' -- ' + item.title"/>
            <section class="editing" [hidden]="!editing">
                <input type="text" [(ng-model)]="item.pictureUrl" class="form-control"/>
                <input type="text" [(ng-model)]="item.artist" class="form-control"/>
                <input type="text" [(ng-model)]="item.title" class="form-control"/>
                <input type="number" [(ng-model)]="item.price" class="form-control"/>
            </section>
            <footer class="caption" [hidden]="editing">
                <p class="info">
                    <strong>{{ item.artist }}</strong> -- {{ item.title }}<br/>
                    USD <strong>{{ item.price }}</strong>
                </p>
                <p class="details" [hidden]="!expanded">
                    <strong>Album name: </strong> {{ item.album.title }}<br/>
                    <strong>Album price:</strong> USD {{ item.album.price }}
                </p>
                <p>
                    <button class="btn btn-sm btn-danger"
                            (click)="toggleCart()"
                            [hidden]="!cart.has(item)">
                        <i class="glyphicon glyphicon-remove"></i>
                    </button>
                    <button class="btn btn-sm btn-success"
                            (click)="toggleCart()"
                            [hidden]="cart.has(item)">
                        <i class="glyphicon glyphicon-shopping-cart"></i>
                    </button>
                    <button class="btn btn-sm"
                        [class.btn-link]="!expanded"
                        [class.btn-default]="expanded"
                        (click)="expanded = !expanded">
                        <span [hidden]="expanded">more</span>
                        <span [hidden]="!expanded">fewer</span> details
                    </button>
                </p>
            </footer>
            <aside class="edit">
                <button class="btn btn-sm"
                    [class.btn-default]="!editing"
                    [class.btn-primary]="editing"
                    (click)="editing = !editing">
                    <i class="glyphicon glyphicon-edit"></i>
                </button>
            </aside>
        </article>
    `
})
export class ItemComponent {
    @Input() item:Item;

    constructor(public cart: Cart) {}

    public editing:boolean = false;
    public expanded:boolean = false;

    toggleCart() {
        if(this.cart.has(this.item)) {
            this.cart.remove(this.item);
        } else {
            this.cart.add(this.item);
        }
    }
}
