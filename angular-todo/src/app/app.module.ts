import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoEntriesComponent } from './todo-list/todo-entries/todo-entries.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './posts-list/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoEntriesComponent,
    PostsListComponent,
    PostComponent
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
