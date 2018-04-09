import { Component, OnInit, Injectable, Inject } from '@angular/core';

import { TODOS } from '../models/todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
@Injectable()
export class TodoListComponent implements OnInit {
  todos: TODOS[];
  selectedTodo: TODOS;

  constructor(private todoService: TodoService) {

  }

  ngOnInit() {
    this.todoService.stateClear.subscribe(p => {
      if (p) {
        this.selectedTodo = {
          id: '', text: '', dateAdded: null
        }
      }
    });
    this.todoService.getTodos().subscribe(p => {
      this.todos = p;
    });
    /*
    this.todos = [
      { id: 1, text: 'Generate Components', dateAdded: new Date('12/27/2017 08:23:56') },
      { id: 2, text: 'UI Design ', dateAdded: new Date('11/07/2016 12:23:56') },
      { id: 3, text: 'Create Services ', dateAdded: new Date('02/27/2018 08:23:56') },
      { id: 4, text: 'Rxjs plugins ', dateAdded: new Date('06/15/2017 13:23:56') }
    ];*/

  }
  onSelectTodo(todo: TODOS) {
    // console.log('current todo', todo);
    this.todoService.setCurrentTodo(todo);
    this.selectedTodo = todo;
  }
  deleteTodo(todo: TODOS) {
    this.todoService.deleteTodo(todo);
  }
}
