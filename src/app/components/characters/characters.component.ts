import { Component, OnInit } from '@angular/core';
import { concatMap, debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { ImageTypes } from 'src/app/models/image.model';
import { Category, MarvelRequestOptions } from 'src/app/models/request.model';
import { MarvelResults } from 'src/app/models/response.model';
import { ApiMarvelService } from 'src/app/services/api-marvel.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(
    private service: ApiMarvelService,
    private dataService: DataService
    ) { }

  category: Category = 'characters'
  allCharacters: any[] = []
  total = 0
  options!: MarvelRequestOptions

  scroll$ = new Subject<number>()

  ngOnInit(): void {
    this.options = {
      limit: 100,
      offset: 0
    }

    this.getCharacters()

    this.scroll$.next(0)
  }

  getCharacters(){
    this.scroll$.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      concatMap(offset => {
        this.options.offset = offset
        return this.service.getData(this.category, this.options)
      })
      ).subscribe(data => this.handleResponse(data))
  }

  getImage(character: any) {
    return this.service.getImage(character.thumbnail, ImageTypes.portrait_uncanny)
  }

  handleResponse(data: any, reset: boolean = false) {
    this.allCharacters = reset ? data.results : [...this.allCharacters, ...data.results]
    this.total = data.total
    this.options.offset = this.options.offset || data.offset
  }

  onScroll(){
    const offset = this.options.offset + this.options.limit
    if(offset < this.total) {
      this.scroll$.next(offset)
    }
  }

  toCharacter(character: MarvelResults){
    this.dataService.setCharacter(character)
  }

}
