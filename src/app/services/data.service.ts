import { Injectable } from '@angular/core';
import { MarvelResults } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private character: MarvelResults | any

  constructor() { }

  setCharacter(character: MarvelResults){
    this.character = character
  }

  getCharacter(){
    return this.character
  }
}
