import { Component, Input, OnInit } from '@angular/core';
import { MarvelCharacterResults } from 'src/app/models/response.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-card-template',
  templateUrl: './card-template.component.html',
  styleUrls: ['./card-template.component.css']
})
export class CardTemplateComponent implements OnInit {

  @Input()
  items: any[] = []

  @Input()
  title: string = ''



  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  toCharacter(character: MarvelCharacterResults){
    this.dataService.setData(character)
  }

}
