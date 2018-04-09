import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component'
import { TodoService } from './todo.service';


@NgModule({
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule
  ],
  declarations: [TodoComponent, TodoFormComponent, TodoListComponent],
  providers: [TodoService]
})
export class TodoModule { }
