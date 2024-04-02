import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Post } from '../models/post.model';
import { Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  isFetching = false;
  loadedPosts = [];

  constructor(private http: HttpClient) { }
  error = new Subject<string>();

  createAndStorePost(title: string, content: string) {
    const postData: Post = {title: title, content: content};
    this.http.post<{name:string}>(
      'https://ng-complete-guide-f2557-default-rtdb.europe-west1.firebasedatabase.app/posts.json', 
      postData).subscribe(posts => {

    }, error =>{
      this.error.next(error.message);
    });
  }

  fetchPosts() {
    // Send Http request
    return this.http
    .get<{ [key: string]: Post }>(
      'https://ng-complete-guide-f2557-default-rtdb.europe-west1.firebasedatabase.app/posts.json')
      .pipe(
        map((responseData) => {
          const postArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postArray.push({ ...responseData[key], id: key });
            }
          }
          return postArray;
      }),
      catchError(errorRes => {
        // Send to analytics server
        return throwError(errorRes);
      })
    );
    }
    deleteAllPosts() {
      return this.http
      .delete('https://ng-complete-guide-f2557-default-rtdb.europe-west1.firebasedatabase.app/posts.json')
    }
}
