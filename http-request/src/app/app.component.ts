import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './models/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    console.log(postData);
    this.http.post<{name:string}>(
      'https://ng-complete-guide-f2557-default-rtdb.europe-west1.firebasedatabase.app/posts.json', 
      postData).subscribe(posts => {
        console.log(posts);
    });
  }
  onFetchPosts() {
    this.fetchPosts();
  }
  private fetchPosts() {
    // Send Http request
    this.http.get<{ [key: string]: Post }>('https://ng-complete-guide-f2557-default-rtdb.europe-west1.firebasedatabase.app/posts.json')
      .pipe(map((responseData) => {
        const postArray: Post[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postArray.push({ ...responseData[key], id: key });
          }
        }
        return postArray;
      }))    
      .subscribe(posts => {
        this.loadedPosts = posts;
        //console.log(posts);
    })
  }

  onClearPosts() {
    // Send Http request
  }
}
