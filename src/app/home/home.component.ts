import { Component, OnInit, OnDestroy } from '@angular/core';

import { interval, Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription!: Subscription;

  constructor() {}

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe((steps) => {
    //   console.log(steps);
    // });
    // building a custom observable
    const customIntervalObservable = Observable.create((observer: any) => {
      let count = 0;

      setInterval(() => {
        observer.next(count);
        if (count === 2) {
          observer.complete();
        }
        // this observable can't throw an error, so we will introduce that feature
        if (count > 3) {
          observer.error(new Error('Count is greater than 3!'));
        }
        count++;
      }, 1000);
    });

    this.firstObsSubscription = customIntervalObservable
      .pipe(
        map((data: number) => {
          return 'Round: ' + (data + 1);
        }),
      )
      .subscribe(
        (data: any) => console.log(data),
        (error: any) => {
          console.log(error);
          alert(error.message);
        },
        () => console.log('Completed!'),
      ); // 0, 1, 2, 3, 4, 5, us
  }

  ngOnDestroy() {
    this.firstObsSubscription.unsubscribe();
  }
}
