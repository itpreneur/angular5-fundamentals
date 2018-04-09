import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service'
import { TODOS } from '../models/todo.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  test: TODOS;
  id: string;
  text: string;
  dateAdded: Date;
  isNew: boolean = true;
  isClear: boolean = false;

  constructor(private todoService: TodoService) {
    //use subscribe if you don't need to transform the objects 
    //and use map only if you want to transform or manipulate the object before assigning it.

    this.todoService.currentTodo.subscribe(p => {
      // console.log('selected todo', p);
      if (p.id != null) {
        this.isNew = false;
        this.id = p.id;
        this.text = p.text;
        this.dateAdded = p.dateAdded;
      }

    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('submit')
    if (this.isNew && !this.isClear) {
      const data = {
        id: this.generateUID(),
        text: this.text,
        dateAdded: new Date()
      }
      this.todoService.addTodo(data);
    }
    else {
      const updData = {
        id: this.id,
        text: this.text,
        dateAdded: new Date()
      }
      //console.log('update', updData);
      this.todoService.updateTodo(updData);
      this.isClear = false;
    }
  }
  generateUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  clearForm() {
    this.isClear = true;
    this.id = '';
    this.text = '';
    this.dateAdded = null;
    this.isNew = true;
    this.todoService.clearState();
  }
}
