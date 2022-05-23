import { Component, OnInit } from '@angular/core';
import { ImageTypes } from 'src/app/models/image.model';
import { MarvelComicsResults } from 'src/app/models/response.model';
import { ApiMarvelService } from 'src/app/services/api-marvel.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {

  comic: MarvelComicsResults | any

  titles: string[] = [
    'Creators',
    'Characters',
    'Stories',
    'Events'
  ]

  constructor(
    private service: ApiMarvelService,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.comic = this.dataService.getCharacter()
  }

  getImage(){
    const thumbnail = this.comic.thumbnail
    return this.service.getImage(thumbnail, ImageTypes.portrait_uncanny)
  }

}
