import {bootstrap, bind} from 'angular2/angular2';
import {
    ROUTER_BINDINGS,
    APP_BASE_HREF,
    ROUTER_PRIMARY_COMPONENT
} from 'angular2/router';

/* services */
import {TodoService} from './services/todo';

/* root component */
import {TodoApp} from './components/app';

const ROUTER_CONFIG = [
    ROUTER_BINDINGS,
    bind(APP_BASE_HREF).toValue('/src'),
    bind(ROUTER_PRIMARY_COMPONENT).toValue(TodoApp)
];

bootstrap(TodoApp, [
    // services
    TodoService,
    ROUTER_CONFIG
]);