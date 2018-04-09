import { Injectable } from '@angular/core';
import { TODOS } from './models/todo.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {
  todos: TODOS[];
  //initialize 
  private todoSource = new BehaviorSubject<TODOS>({ id: null, text: null, dateAdded: null });
  currentTodo = this.todoSource.asObservable();  //set as listener
  private stateSource = new BehaviorSubject<boolean>(true);
  stateClear = this.stateSource.asObservable();

  constructor() {
    this.todos = [
      { id: '1', text: 'Generate Components', dateAdded: new Date('12/27/2017 08:23:56') },
      { id: '2', text: 'UI Design ', dateAdded: new Date('11/07/2016 12:23:56') },
      { id: '3', text: 'Create Services ', dateAdded: new Date('02/27/2018 08:23:56') },
      { id: '4', text: 'Rxjs plugins ', dateAdded: new Date('06/15/2017 13:23:56') }
    ];
  }
  addTodo(data: TODOS) {
    this.todos.unshift(data);
  }

  updateTodo(data: TODOS) {
    this.todos.forEach((p, i) => {
      if (p.id == data.id) {

        this.todos[i].text = data.text;
      }
    });

  }
  deleteTodo(data: TODOS) {
    var i = this.todos.indexOf(data);
    this.todos.splice(i, 1);

  }
  getTodos(): Observable<TODOS[]> {
    return of(this.todos);
  }
  setCurrentTodo(t: TODOS) {
    //pass the data to the subscriber todoSource
    this.todoSource.next(t);
  }
  clearState() {
    //pass the data to the subscriber todoSource
    this.stateSource.next(true);
  }
}
