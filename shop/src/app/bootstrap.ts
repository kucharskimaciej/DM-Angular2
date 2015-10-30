import {bootstrap, bind} from 'angular2/angular2';
import {
    ROUTER_PROVIDERS,
    APP_BASE_HREF,
    ROUTER_PRIMARY_COMPONENT,
    HashLocationStrategy,
    LocationStrategy,
    PathLocationStrategy
} from 'angular2/router';

import {
    HTTP_BINDINGS
} from 'angular2/http';

/* services */
import {DataService} from './services/data';

/* root component */
import {RootComponent} from './components/app';


const ROUTER_CONFIG = [
    ROUTER_PROVIDERS,
    bind(APP_BASE_HREF).toValue('/'),
    bind(ROUTER_PRIMARY_COMPONENT).toValue(RootComponent),
    bind(LocationStrategy).toClass(HashLocationStrategy)
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