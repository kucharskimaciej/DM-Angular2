var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="../../typings/angular2/angular2.d.ts"/>
var angular2_1 = require('angular2/angular2');
var todo_list_1 = require('./todo_list');
var todo_service_1 = require('./todo_service');
var item_form_1 = require('./todo_form/item_form');
var TodoApp = (function () {
    function TodoApp(todoService) {
        this.todos = todoService.todos;
        console.log(this.todos);
    }
    TodoApp = __decorate([
        angular2_1.View({
            directives: [todo_list_1.ListComponent, item_form_1.ItemFormComponent],
            template: "\n        <header>\n            <h1>Devmeetings Angular2</h1>\n        </header>\n        <list [items]=\"todos\"></list>\n        <item-form></item-form>\n    "
        }),
        angular2_1.Component({
            selector: 'todo-app'
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService])
    ], TodoApp);
    return TodoApp;
})();
exports.TodoApp = TodoApp;
angular2_1.bootstrap(TodoApp, [todo_service_1.TodoService]);
//# sourceMappingURL=app.js.map