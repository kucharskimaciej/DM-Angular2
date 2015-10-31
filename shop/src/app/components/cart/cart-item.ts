import {Component, Input, NgFor} from 'angular2/angular2';

import Item from '../../services/data';

@Component({
    selector: 'cart-item',
    template: `
    <article class="media">
        <div class="media-left">
            <img class="media-object" [src]="item.pictureUrl" width="50">
        </div>
        <div class="media-body">
            <h4 class="media-heading">{{ item.title }}</h4>
            <strong>Price: </strong> {{'$'}}{{item.price}}
        </div>
     </article>
    `
})

export class CartItemComponent {
    @Input() item:Item;
}