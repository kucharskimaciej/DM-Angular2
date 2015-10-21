export enum TodoPriority {A, B, C}

export class TodoModel {


    constructor(
        public title:string,
        private _priority:TodoPriority) {
        console.log(this.title, this._priority);
    }

    get priority() {
        return TodoPriority[this._priority];
    }
}