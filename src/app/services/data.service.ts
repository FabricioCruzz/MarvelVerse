import { Injectable } from '@angular/core';
import { MarvelCharacterResults, MarvelComicsResults } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private character: MarvelCharacterResults | any

  constructor() { }

  setCharacter(character: MarvelCharacterResults | MarvelComicsResults){
    this.character = character
  }

  getCharacter(){
    return this.character
  }
}
