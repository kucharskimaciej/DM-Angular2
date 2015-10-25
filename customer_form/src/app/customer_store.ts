export interface IAddress {
    address: string;
    city: string;
    zip: number;
}

export interface IName {
    first: string;
    middle?: string;
    last: string;
}

export class Customer {
    public name: IName;
    public address: IAddress;
    public billingAddress: IAddress;

    constructor({
        name,
        address,
        billingAddress
    }) {
        this.name = name;
        this.address = address;
        this.billingAddress = billingAddress || address;
    }
}
export class CustomerStore {
    private customers: Customer[];
}