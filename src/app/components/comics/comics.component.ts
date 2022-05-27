import { Component, OnInit } from '@angular/core';
import { concatMap, debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { ImageTypes } from 'src/app/models/image.model';
import { Category, MarvelRequestOptions } from 'src/app/models/request.model';
import { MarvelComicsResults } from 'src/app/models/response.model';
import { ApiMarvelService } from 'src/app/services/api-marvel.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: [
    './comics.component.css',
    '../characters/characters.component.css'
  ]
})
export class ComicsComponent implements OnInit {

  constructor(
    private service: ApiMarvelService,
    private dataService: DataService
  ) { }

  category: Category = 'comics'
  allComics: any[] = []
  total = 0
  options!: MarvelRequestOptions

  scroll$ = new Subject<number>()

  title: string = 'Choose A Comic To Details'

  ngOnInit(): void {
    this.options = {
      limit: 100,
      offset: 0
    }

    this.getComics()

    this.scroll$.next(0)
  }

  getComics(){
    this.scroll$.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      concatMap(offset => {
        this.options.offset = offset
        return this.service.getData(this.category, this.options)
      })
      ).subscribe(data => this.handleResponse(data))
  }

    getImage(comic: any) {
      return this.service.getImage(comic.thumbnail, ImageTypes.portrait_uncanny)
    }

    handleResponse(data: any, reset: boolean = false){
      this.allComics = reset ? data.results : [...this.allComics, ...data.results]
      this.total = data.offset
      this.options.offset = this.options.offset || data.offset
  }

  toComic(comic: MarvelComicsResults) {
    this.dataService.setData(comic)
  }

}
