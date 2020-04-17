import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import { Event} from '../../models/event';
import { EventServiceService } from '../../services/event-service.service';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {
  result: { 'message': '--'};
  constructor(
    private route: ActivatedRoute,
    private eventService: EventServiceService
  ) { }

  ngOnInit(): void {
  }
  addEvent(name: string, description: string, date: string) {
    const newEvent = new Event(name, description, date);
    this.eventService.addEvent(newEvent).subscribe(result => {this.result = result; });
  }
}
