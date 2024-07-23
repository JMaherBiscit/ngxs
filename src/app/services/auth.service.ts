import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(): Observable<{ username: string; token: string }> {
    return new Observable((subscriber) => {
      setTimeout(() => {
        subscriber.next({ username: 'user123', token: 'abc123token' });
        subscriber.complete();
      }, 2000);
    });
  }

  logout(): Observable<void> {
    return new Observable((subscriber) => {
      setTimeout(() => {
        subscriber.next();
        subscriber.complete();
      }, 2000);
    });
  }
}
