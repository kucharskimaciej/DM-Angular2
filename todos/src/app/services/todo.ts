import {Injectable} from 'angular2/angular2';
import {Http, Response} from 'angular2/http';

export class TodoModel {
    constructor(
        public title:string,
        public priority:number = 1,
        public completed:boolean = false) {}
}


/* declares the service as Injectable - Angular will look for dependency delcarations in constructor */
@Injectable()
export class TodoService {
    todos:Array<TodoModel> = [];

    constructor(private http: Http) {
        this.load();
    }

    load() {
        return this.http.get("./data.json").subscribe((result) => {
            return result.json().map((todo) => {
                return new TodoModel(todo.title, todo.priority, todo.completed);
            }).map((todo) => {
                this.todos.push(todo);
            });
        });
    }


    add(model: TodoModel): void {
        this.todos.push(model);
    }
}