import {Component, NgFor} from 'angular2/angular2';

import {Item} from '../../services/data';
import {Cart} from '../../services/cart';
import {CartItemComponent} from './cart-item';

@Component({
    selector: 'cart',
    directives: [CartItemComponent, NgFor],
    template: `
        <h4 class="text-center">Items in your cart</h4>
        <ul class="list-group">
            <cart-item *ng-for="#item of items" [item]="item" class="list-group-item"></cart-item>
        </ul>

        <strong>Total:</strong> USD {{total}}
    `
})

export class CartComponent {
    public items: Item[];
    public total: number;

    constructor(private cart: Cart) {
        this.items = cart.items;
        this.total = cart.total;
    }
}