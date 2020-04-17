import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import {Event} from '../models/event';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {
  url = 'http://localhost:3702/event/'

  constructor(
    private http: HttpClient
  ) { }
  addEvent(event: Event): Observable<any> {
    return this.http.post(this.url + 'addEvent', event);
  }

  getEvents() {
    console.log('getEvents service');
    return this.http.get<Event[]>(this.url);
  }
}
