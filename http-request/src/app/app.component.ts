import { Component, OnInit, OnDestroy} from '@angular/core';
import { Post } from './models/post.model';
import { PostsService } from './services/posts.service';
import { Subscription } from 'rxjs';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts = [];
  isFetching = true;
  error=null;
  private errorSub: Subscription;

  constructor(private postService: PostsService) {}

  ngOnInit() {
    this.errorSub= this.postService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    })
    
    this.isFetching= true;
    this.postService.fetchPosts().subscribe((post) => {
      this.isFetching = false;
      this.loadedPosts=post;
    }, error => {
      this.isFetching = false;
      this.error = error.message;
      console.log(error);
    });
    
    
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postService.createAndStorePost(postData.title, postData.content);
  }
  onFetchPosts() {
    this.isFetching= true;
    this.postService.fetchPosts().subscribe({
      next:(post: Post[]) => {
        this.isFetching = false;
        this.loadedPosts=post;
        console.log(post);
      },
      error:(error) => {
        this.isFetching = false;
        this.error = error.message;
        console.log(error);
      },
      complete:() => {
        console.log('fetching complete');
        this.error= null;
      }
    })    
  }
  

  onClearPosts() {
    // Send Http request
    this.postService.deleteAllPosts().subscribe(() => {
      this.loadedPosts = [];
    })
  }
  onHandleError() {
    this.error = null;
  }

  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }
}
