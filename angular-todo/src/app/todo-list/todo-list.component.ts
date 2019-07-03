import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TodosService } from './todos-service/todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @ViewChild('newTodoInput', { static: true }) newTodoInput: ElementRef;
  constructor(private todosService: TodosService) {}

  ngOnInit() {}

  addNewTodo() {
    const newEntry = this.newTodoInput.nativeElement.value;
    this.todosService.addEntry(newEntry);
    this.newTodoInput.nativeElement.value = '';
  }
}
