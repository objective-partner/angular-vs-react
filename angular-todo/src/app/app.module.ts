import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoEntriesComponent } from './todo-list/todo-entries/todo-entries.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoEntriesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
