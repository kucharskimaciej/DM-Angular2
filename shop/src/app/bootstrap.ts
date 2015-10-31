import {bootstrap, provide} from 'angular2/angular2';
import {
    ROUTER_PROVIDERS,
    APP_BASE_HREF,
    ROUTER_PRIMARY_COMPONENT,
    HashLocationStrategy,
    LocationStrategy,
    PathLocationStrategy
} from 'angular2/router';

import {
    HTTP_PROVIDERS
} from 'angular2/http';

/* services */
import {DataService} from './services/data';
import {Cart} from './services/cart';

/* root component */
import {RootComponent} from './components/app';


const ROUTER_CONFIG = [
    ROUTER_PROVIDERS,
    provide(APP_BASE_HREF, {useValue: '/'}),
    provide(LocationStrategy, {useClass: HashLocationStrategy})
];
const HTTP_CONFIG = [
    HTTP_PROVIDERS
];

bootstrap(RootComponent, [
    // services
    DataService,
    Cart,
    ROUTER_CONFIG,
    HTTP_CONFIG
]);