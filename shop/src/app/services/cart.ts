import {Item} from './data';

export class Cart {
    public items: Item[] = [];

    has(item: Item): boolean {
        return this.items.indexOf(item) !== -1;
    }

    add(item: Item) {
        if(!this.has(item)) {
            this.items.push(item);
        }
    }

    remove(item:Item) {
        if(this.has(item)) {
            this.items.splice(this.items.indexOf(item), 1);
        }
    }

    get total() {
        return this.items.reduce((total, i) => total + Number(i.price), 0);
    }
}
