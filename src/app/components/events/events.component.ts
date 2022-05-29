import { Component, OnInit } from '@angular/core';
import { concatMap, debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { ImageTypes } from 'src/app/models/image.model';
import { Category, MarvelRequestOptions } from 'src/app/models/request.model';
import { MarvelEventsResults } from 'src/app/models/response.model';
import { ApiMarvelService } from 'src/app/services/api-marvel.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: [
    './events.component.css',
    '../characters/characters.component.css'
  ]
})
export class EventsComponent implements OnInit {

  constructor(
    private service: ApiMarvelService,
    private dataService: DataService
  ) { }

  category: Category = 'events'
  allEvents: any[] = []
  total = 0
  options!: MarvelRequestOptions

  scroll$ = new Subject<number>()

  title: string = 'Choose A Event To Details'

  ngOnInit(): void {
    this.options = {
      limit: 100,
      offset: 0
    }

    this.getEvents()

    this.scroll$.next(0)
  }

  getEvents(){
    this.scroll$.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      concatMap(offset => {
        this.options.offset = offset
        return this.service.getData(this.category,this.options)
      })
    ).subscribe(data => this.handleResponse(data))
  }

  getImage(event: any){
    return this.service.getImage(event.thumbnail, ImageTypes.portrait_uncanny)
  }

  handleResponse(data: any, reset: boolean = false){
    this.allEvents = reset ? data.results : [...this.allEvents, ...data.results]
    this.total = data.offset
    this.options.offset = this.options.offset || data.offset
  }

  toEvent(event: MarvelEventsResults){
    this.dataService.setData(event)
  }

}
