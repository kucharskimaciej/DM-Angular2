import {Component, Input, FORM_DIRECTIVES} from 'angular2/angular2';
import {Item} from '../../../services/data';

@Component({
    selector: 'item',
    directives: [FORM_DIRECTIVES],
    template: `
        <article class="thumbnail">
            <img [src]="item.pictureUrl" />
            <footer class="caption">
                <p class="info">
                    <strong>{{ item.artist }}</strong> -- {{ item.title }}
                </p>
                <p class="details" [hidden]="!expanded">
                    <strong>Album name: </strong> {{ item.album.title }}<br/>
                    <strong>Album price:</strong> USD {{ item.album.price }}
                </p>
                <p>
                    <button class="btn btn-sm btn-success">
                        Buy
                    </button>
                    <button class="btn btn-sm btn-default" (click)="expanded = !expanded">
                        <span [hidden]="expanded">more</span>
                        <span [hidden]="!expanded">fewer</span> details
                    </button>
                </p>
            </footer>
        </article>
    `
})
export class ItemComponent {
    @Input() item:Item;

    public editing:boolean = false;
    public expanded:boolean = false;
}
