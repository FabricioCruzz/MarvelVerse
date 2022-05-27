import { Component, OnInit } from '@angular/core';
import { ImageTypes } from 'src/app/models/image.model';
import { MarvelCharacterResults } from 'src/app/models/response.model';
import { ApiMarvelService } from 'src/app/services/api-marvel.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  character: MarvelCharacterResults | any

  titles: string[] = [
    'Comics',
    'Events',
    'Series',
    'Stories'
  ]

  constructor(
    private service: ApiMarvelService,
    private dataService: DataService
    ) {}

  ngOnInit(): void {
    this.character = this.dataService.getData()
  }

  getImage() {
    const thumbnail = this.character.thumbnail
    return this.service.getImage(thumbnail, ImageTypes.landscape_xlarge)
  }
}
