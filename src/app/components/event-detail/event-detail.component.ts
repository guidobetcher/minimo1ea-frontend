import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  @Input() event;
  details: boolean;
  modifyEvent: boolean
  constructor() { }

  ngOnInit(): void {
  }

  getEventDetails() {
    this.details = !this.details;
  }

  modify() {
    this.modifyEvent = !this.modifyEvent;
  }
}
