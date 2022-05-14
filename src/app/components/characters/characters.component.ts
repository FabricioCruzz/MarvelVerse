import { Component, OnInit } from '@angular/core';
import { concatMap, debounceTime, distinctUntilChanged, Observable, Subject } from 'rxjs';
import { ImageTypes } from 'src/app/models/image.model';
import { Category, MarvelRequestOptions } from 'src/app/models/request.model';
import { ApiMarvelService } from 'src/app/services/api-marvel.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(private characterSvc: ApiMarvelService) { }

  category: Category = 'characters'
  allCharacters: any[] = []
  total = 0
  options!: MarvelRequestOptions

  scroll$ = new Subject<number>()

  ngOnInit(): void {
    this.options = {
      limit: 50,
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
        return this.characterSvc.getData(this.category, this.options)
      })
      ).subscribe(data => this.handleResponse(data))
  }

  getImage(character: any) {
    return this.characterSvc.getImage(character.thumbnail, ImageTypes.portrait_uncanny)
  }

  handleResponse(data: any, reset: boolean = false) {
    this.allCharacters = reset ? data.results : [...this.allCharacters, ...data.results]
    this.total = data.total
    this.options.offset = this.options.offset || data.offset
  }

}
