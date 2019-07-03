import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TodosService } from './todos-service/todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @ViewChild('newTodoInput', { static: true }) newTodoInput: ElementRef;
  entries: string[] = [];

  constructor(private todosService: TodosService) {}

  ngOnInit() {
    this.todosService.getEntries().subscribe(entriesFromService => {
      this.entries = entriesFromService;
    });
  }

  addNewTodo() {
    const newEntry = this.newTodoInput.nativeElement.value;
    this.todosService.addEntry(newEntry);
    this.newTodoInput.nativeElement.value = '';
  }
}
