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
var item_form_component_1 = require('./todo_form/item_form_component');
var ng2 = require('angular2/angular2');
console.log(ng2);
var TodoApp = (function () {
    function TodoApp(todoService) {
        this.todos = todoService.todos;
    }
    TodoApp = __decorate([
        angular2_1.Component({
            selector: 'todo-app',
            directives: [todo_list_1.ListComponent, item_form_component_1.ItemFormComponent],
            template: "\n        <header class=\"row\">\n            <h1 class=\"col-sm-12 text-center\">Devmeetings Angular2</h1>\n        </header>\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <list [items]=\"todos\"></list>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <item-form></item-form>\n            </div>\n        </div>\n\n    "
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService])
    ], TodoApp);
    return TodoApp;
})();
exports.TodoApp = TodoApp;
angular2_1.bootstrap(TodoApp, [todo_service_1.TodoService]);
//# sourceMappingURL=app.js.map