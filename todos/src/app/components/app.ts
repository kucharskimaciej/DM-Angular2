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
import {TodoService} from '../services/todo';

/* components */
import {HomeComponent} from './home';
import {ItemFormComponent} from './item_form';

@Component({
    selector: 'todo-app',
    directives: [ROUTER_DIRECTIVES],
    template: `
        <header class="row l-island">
            <h1 class="col-sm-12 text-center">Devmeetings Angular2</h1>
            <nav class="col-sm-12 text-center">
                <a class="btn btn-link" [router-link]="['/Home']">Home</a>
                <a class="btn btn-link" [router-link]="['/AddNew']">Add new</a>
            </nav>
        </header>
        <div class="row">
            <div class="col-sm-12">
                <router-outlet></router-outlet>
            </div>
        </div>

    `
})
@RouteConfig([
    {path: "/", as: "Home", component: HomeComponent},
    {path: "/new", as: "AddNew", component: ItemFormComponent},
])
export class TodoApp {
    constructor(
        public router: Router
    ) {}
}
