import { Component, OnInit } from '@angular/core';
import {Event} from '../../models/event';
import {ActivatedRoute} from '@angular/router';
import {EventServiceService} from '../../services/event-service.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: Event[] = [];

  constructor(
    private route: ActivatedRoute,
    private eventService: EventServiceService
  ) {
    this.eventService.getEvents().subscribe(events => {this.events = events; });
  }

  ngOnInit(): void {
  }

}
