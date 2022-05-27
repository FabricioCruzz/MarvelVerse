import { Injectable } from '@angular/core';
import { MarvelCharacterResults, MarvelComicsResults } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data: any

  constructor() { }

  setData(data: any){
    this.data = data
  }

  getData(){
    return this.data
  }
}
