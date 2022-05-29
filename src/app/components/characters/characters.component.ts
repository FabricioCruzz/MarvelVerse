import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/request.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor() { }

    title: string = 'Choose A Character To Details'
    category: Category = 'characters'
    page: string = '/character'

  ngOnInit(): void {

  }

}
