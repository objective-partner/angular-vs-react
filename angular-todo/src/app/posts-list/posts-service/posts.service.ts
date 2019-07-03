import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observer } from 'rxjs';

export interface Post {
  title: string;
  score: number;
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) {}

  public getPosts(): Promise<Post[]> {
    return new Promise(resolve => {
      const requestObserver: Observer<any> = {
        next: postsData => {
          const extractedData = postsData.data.children;
          const posts: Post[] = extractedData.map(postData => {
            return { title: postData.data.title, score: postData.data.score };
          });
          resolve(posts);
        },
        error: () => {
          resolve([]);
        },
        complete: () => {}
      };
      this.http
        .get('https://www.reddit.com/r/reactjs/top.json?sort=new&limit=10')
        .subscribe(requestObserver);
    });
  }
}
