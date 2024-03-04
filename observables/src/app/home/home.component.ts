import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

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
        if (count === 10) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Count is greater than 3!'));
        }
        count++;
      }, 1000);
    });

/*     customIntervalObservable.pipe(map((data: number)=>{
      return  'Round: ' + (data + 1);
    })); */

    this.firstObsSubscription = customIntervalObservable.pipe(filter((data: number) =>{
      return data > 0;
    }),map((data: number) => {
      return 'Round: ' + (data + 1);
    })).subscribe(data => {
      this.count = data;
      console.log("==> ~ HomeComponent ~ this.firstObsSubscription=customIntervalObservable ~ this.count: ", this.count);
    }, error => {
      console.log("==> ~ HomeComponent ~ this.firstObsSubscription=customIntervalObservable ~ error: ", error.message);
      alert(error.message);
    }, () => {
      alert("Observable completed");
    });
    
    /* this.firstObsSubscription = customIntervalObservable.subscribe(data => {
      this.count = data;
      console.log("==> ~ HomeComponent ~ this.firstObsSubscription=customIntervalObservable ~ this.count: ", this.count);
    }, error => {
      console.log("==> ~ HomeComponent ~ this.firstObsSubscription=customIntervalObservable ~ error: ", error.message);
      alert(error.message);
    }, () =>{
      alert("Observable completed");
    })
 */

    /* this.firstObsSubscription = interval(1000).subscribe(x => {
      this.count=x;
      console.log("==> ~ HomeComponent ~ this.firstObsSubscription=interval ~ this.count: ", this.count);
      }); */
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }
}
