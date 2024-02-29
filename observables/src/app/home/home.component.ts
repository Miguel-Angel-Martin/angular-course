import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription: Subscription;
  constructor() { }
  count: number;
  ngOnInit() {
    const customIntervalObservable = Observable.create(observer => {
      let count: number = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 5) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Count is greater than 3!'));
        }
        count++;
      }, 1000);
    });

    
    this.firstObsSubscription = customIntervalObservable.subscribe(data => {
      this.count = data;
      console.log("==> ~ HomeComponent ~ this.firstObsSubscription=customIntervalObservable ~ this.count: ", this.count);
    })


    /* this.firstObsSubscription = interval(1000).subscribe(x => {
      this.count=x;
      console.log("==> ~ HomeComponent ~ this.firstObsSubscription=interval ~ this.count: ", this.count);
      }); */
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }
}
