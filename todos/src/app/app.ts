import {
    View,
    Component,
    NgFor,
    bootstrap,
    bind
} from 'angular2/angular2';

import {
    APP_BASE_HREF,
    ROUTER_DIRECTIVES,
    ROUTER_BINDINGS,
    ROUTER_PRIMARY_COMPONENT,
    Router,
    RouteConfig
} from 'angular2/router';



/* services */
import {TodoService} from './todo_service';

/* components */
import {HomeComponent} from './home';
import {ItemFormComponent} from './todo_form/item_form_component';

@Component({
    selector: 'todo-app',
    directives: [ROUTER_DIRECTIVES],
    template: `
        <header class="row">
            <h1 class="col-sm-12 text-center">Devmeetings Angular2</h1>
            <nav class="col-sm-12 text-right">
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

bootstrap(TodoApp, [
    // services
    TodoService,

    // router deps
    ROUTER_BINDINGS,
    bind(APP_BASE_HREF).toValue('/src'),
    bind(ROUTER_PRIMARY_COMPONENT).toValue(TodoApp)
]);