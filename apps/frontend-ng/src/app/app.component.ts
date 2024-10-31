import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Event } from '@splitwiser/libs';
import { EventCreateDto, EventService } from './event.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  providers: [EventService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Split Wiser';

  newEvent: EventCreateDto = { name: '', date: '', description: '' };

  events: Event[] = [];

  constructor(private eventService: EventService) {}

  addItem(event: EventCreateDto) {
    this.eventService.addEvent(event);
  }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }
}
