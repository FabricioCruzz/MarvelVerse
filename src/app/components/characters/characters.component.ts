import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiMarvelService } from 'src/app/services/api-marvel.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(private characterSvc: ApiMarvelService) { }

  allCharacters: Observable<any> | undefined

  ngOnInit(): void {
    this.getCharacters()
  }

  getCharacters(){
    this.allCharacters = this.characterSvc.getAllCharacters()
  }

}
