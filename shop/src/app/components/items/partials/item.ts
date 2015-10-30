import {Component, Input, FORM_DIRECTIVES} from 'angular2/angular2';
import {Item} from '../../../services/data';

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
                    <button class="btn btn-sm btn-success">
                        Buy
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

    public editing:boolean = false;
    public expanded:boolean = false;
}
