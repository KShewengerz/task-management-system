"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", {value: true});
const core_1 = require("@angular/core");
let TaskListComponent = class TaskListComponent {
    constructor() {
        this.tasks = [];
    }

    ngOnInit() {
        console.log(this.tasks);
    }
};
__decorate([
    core_1.Input()
], TaskListComponent.prototype, "tasks", void 0);
TaskListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'tms-home-task-list',
        templateUrl: 'task-list.component.html',
        styleUrls: ['task-list.component.css']
    })
], TaskListComponent);
exports.TaskListComponent = TaskListComponent;
//# sourceMappingURL=task-list.component.js.map