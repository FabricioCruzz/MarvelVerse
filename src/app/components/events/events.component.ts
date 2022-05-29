import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/request.model';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor() { }

  title: string = 'Choose A Event To Details'
  category: Category = 'events'
  page: string = '/event'

  ngOnInit(): void {

  }

}
