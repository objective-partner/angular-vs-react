import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos-service/todos.service';

@Component({
  selector: 'app-todo-entries',
  templateUrl: './todo-entries.component.html',
  styleUrls: ['./todo-entries.component.css']
})
export class TodoEntriesComponent implements OnInit {
  entries: string[] = [];

  constructor(private todosService: TodosService) {}

  ngOnInit() {
    this.todosService.getEntries().subscribe(entriesFromService => {
      this.entries = entriesFromService;
    });
  }
}
