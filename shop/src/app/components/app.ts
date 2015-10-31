import {
    Component,
    NgFor
} from 'angular2/angular2';

import {
    ROUTER_DIRECTIVES,
    Router,
    RouteConfig
} from 'angular2/router';



/* services */
import {DataService} from '../services/data';

/* components */
import {ItemsIndexComponent} from './items/index';
import {ItemsDetailsComponent} from './items/details';
import {CustomerFormComponent} from './customer/form';
import {CartComponent} from './cart/cart';

@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES, CartComponent],
    template: `
        <header class="row l-island">
            <h1 class="col-sm-12 text-center">AjMusik shop</h1>
            <nav class="col-sm-12 text-center">
                <a class="btn btn-link" [router-link]="['/Index']">Home</a>
                <a class="btn btn-link" [router-link]="['/AddCustomer']">New order</a>
            </nav>
        </header>
        <div class="row">
            <div class="col-sm-9">
                <router-outlet></router-outlet>
            </div>
            <cart class="col-sm-3"></cart>
        </div>

    `
})
@RouteConfig([
    {path: "/", as: "Index", component: ItemsIndexComponent},
    {path: "/items/:id", as: "Details", component: ItemsDetailsComponent},
    {path: "/customers/new", as: "AddCustomer", component: CustomerFormComponent}
])
export class RootComponent {
    constructor(
        public router: Router
    ) {}
}
