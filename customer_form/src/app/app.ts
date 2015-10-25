import {Component, View, bootstrap} from 'angular2/angular2';
import {CustomerStore} from './customer_store';

@Component({
    selector: 'customer-app'
})

@View({
    template: 'Hello!'
})

export class CustomerAppComponent {
    constructor(
        private cs: CustomerStore
    ){}
}

bootstrap(CustomerAppComponent, [CustomerStore]);