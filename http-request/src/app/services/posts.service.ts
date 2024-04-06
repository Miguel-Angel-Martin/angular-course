import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
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
      postData, 
      {observe: 'response'}
      ).subscribe(posts => {
        console.log(posts);
    }, error =>{
      this.error.next(error.message);
    });
  }

  fetchPosts() {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    // Send Http request
    return this.http
    .get<{ [key: string]: Post }>(
      'https://ng-complete-guide-f2557-default-rtdb.europe-west1.firebasedatabase.app/posts.json',{
        headers: new HttpHeaders({'Custom-Header': 'Hello'}),
        params : searchParams,//new HttpParams().set('print', 'pretty') //parameters from firebase configuration
        responseType: 'json'
      })
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
      .delete('https://ng-complete-guide-f2557-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
        {
          observe: 'events',
          responseType: 'json'
        }
      ).pipe(tap(event=>{
        console.log(event);
        if (event.type === HttpEventType.Sent){
          console.log(event);
        }
        if(event.type === HttpEventType.Response){
          console.log(event.body);
        }
      })
        
      );
    }
}
