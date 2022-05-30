import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ImageTypes } from 'src/app/models/image.model';
import { MarvelStoriesResults } from 'src/app/models/response.model';
import { ApiMarvelService } from 'src/app/services/api-marvel.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: [
    './story.component.css',
    '../../characters/character/character.component.css'
  ]
})
export class StoryComponent implements OnInit {

  story: MarvelStoriesResults | any

  titles: string[] = [
    'Creators',
    'Characters',
    'Comics',
    'Series',
    'Events'
  ]

  subtitle = 'Story'

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private service: ApiMarvelService,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.story = this.dataService.getData()
    this.document.documentElement.scrollTop
  }

  getImage(){
    const thumbnail = this.story.thumbnail
    return this.service.getImage(thumbnail, ImageTypes.portrait_uncanny)
  }

}
