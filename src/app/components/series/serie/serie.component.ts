import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ImageTypes } from 'src/app/models/image.model';
import { MarvelSeriesResults } from 'src/app/models/response.model';
import { ApiMarvelService } from 'src/app/services/api-marvel.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: [
    './serie.component.css',
    '../../characters/character/character.component.css'
]
})
export class SerieComponent implements OnInit {

  serie: MarvelSeriesResults | any

  titles: string[] = [
    'Creators',
    'Characters',
    'Comics',
    'Stories',
    'Events'
  ]

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private service: ApiMarvelService,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.serie = this.dataService.getData()
    document.documentElement.scrollTop = 0
  }

  getImage(){
    const thumbnail = this.serie.thumbnail
    return this.service.getImage(thumbnail, ImageTypes.portrait_uncanny)
  }

}
