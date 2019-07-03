import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-entries',
  templateUrl: './todo-entries.component.html',
  styleUrls: ['./todo-entries.component.css']
})
export class TodoEntriesComponent {
  @Input()
  entries: string[] = [];
}
