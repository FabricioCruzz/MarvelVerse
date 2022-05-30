import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ImageTypes } from 'src/app/models/image.model';
import { MarvelEventsResults } from 'src/app/models/response.model';
import { ApiMarvelService } from 'src/app/services/api-marvel.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: [
    './event.component.css',
    '../../characters/character/character.component.css'
  ]
})
export class EventComponent implements OnInit {

  event: MarvelEventsResults | any

  titles: string[] = [
    'Creators',
    'Characters',
    'Comics',
    'Stories',
    'Series'
  ]

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private service: ApiMarvelService,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.event = this.dataService.getData()
    this.document.documentElement.scrollTop
  }

  getImage(){
    const thumbnail = this.event.thumbnail
    return this.service.getImage(thumbnail, ImageTypes.portrait_uncanny)
  }

}
