import { Component, OnInit } from '@angular/core';
import { concatMap, debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { ImageTypes } from 'src/app/models/image.model';
import { Category, MarvelRequestOptions } from 'src/app/models/request.model';
import { MarvelSeriesResults } from 'src/app/models/response.model';
import { ApiMarvelService } from 'src/app/services/api-marvel.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: [
    './series.component.css',
    '../characters/characters.component.css'
  ]
})
export class SeriesComponent implements OnInit {

  constructor(
    private service: ApiMarvelService,
    private dataService: DataService
  ) { }

  category: Category = 'series'
  allSeries: any[] = []
  total = 0
  options!: MarvelRequestOptions

  scroll$ = new Subject<number>()

  title: string = 'Choose A Serie To Details'

  ngOnInit(): void {
    this.options = {
      limit: 100,
      offset: 0
    }

    this.getSeries()

    this.scroll$.next(0)
  }

  getSeries(){
    this.scroll$.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      concatMap(offset => {
        this.options.offset = offset
        return this.service.getData(this.category,this.options)
      })
    ).subscribe(data => this.handleResponse(data))
  }

  getImage(serie: any){
    return this.service.getImage(serie.thumbnail, ImageTypes.portrait_uncanny)
  }

  handleResponse(data: any, reset: boolean = false){
    this.allSeries = reset ? data.results : [...this.allSeries, ...data.results]
    this.total = data.offset
    this.options.offset = this.options.offset || data.offset
  }

  toSerie(serie: MarvelSeriesResults){
    this.dataService.setData(serie)
  }
}
