import {bootstrap, bind} from 'angular2/angular2';
import {
    ROUTER_BINDINGS,
    APP_BASE_HREF,
    ROUTER_PRIMARY_COMPONENT
} from 'angular2/router';
import {
    HTTP_BINDINGS
} from 'angular2/http';

/* services */
import {DataService} from './services/data';

/* root component */
import {RootComponent} from './components/app';

const ROUTER_CONFIG = [
    ROUTER_BINDINGS,
    bind(APP_BASE_HREF).toValue('/src'),
    bind(ROUTER_PRIMARY_COMPONENT).toValue(RootComponent)
];
const HTTP_CONFIG = [
    HTTP_BINDINGS
];

bootstrap(RootComponent, [
    // services
    DataService,
    ROUTER_CONFIG,
    HTTP_CONFIG
]);