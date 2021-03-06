import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { MdlModule } from "@angular-mdl/core";
import { MdlPopoverModule } from "@angular-mdl/popover";
import { MdlSelectModule } from "@angular-mdl/select";

import { DragulaModule } from "ng2-dragula/ng2-dragula";

import { SectionsModule } from "../sections/sections.module";

import { TaskComponent } from "./task.component";
import { TaskListComponent } from "./task-list/task-list.component";
import { TaskMenuComponent } from "./task-menu/task-menu.component";
import { TaskFormComponent } from "./task-form/task-form.component";

import { TaskService } from "./task.service";
import { TaskListResolver } from "./task-resolver.service";

import { TaskRouting } from "./task-routing.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MdlModule,
    MdlPopoverModule,
    MdlSelectModule,
    DragulaModule,
    SectionsModule,
    TaskRouting
  ],
  declarations: [
    TaskComponent,
    TaskListComponent,
    TaskMenuComponent,
    TaskFormComponent
  ],
  providers: [
    TaskService,
    TaskListResolver
  ],
  entryComponents: [ 
    TaskMenuComponent,
    TaskFormComponent
  ]
})
export class TaskModule { }
