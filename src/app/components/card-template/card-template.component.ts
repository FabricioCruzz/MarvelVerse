import { Component, Input, OnInit } from '@angular/core';
import { concatMap, debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { ImageTypes } from 'src/app/models/image.model';
import { Category, MarvelRequestOptions } from 'src/app/models/request.model';
import { ApiMarvelService } from 'src/app/services/api-marvel.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-card-template',
  templateUrl: './card-template.component.html',
  styleUrls: ['./card-template.component.css']
})
export class CardTemplateComponent implements OnInit {

  constructor(
    private service: ApiMarvelService,
    private dataService: DataService
  ) { }


  //String que representa o caminho para o routerLink. Por exemplo: '/character'
  @Input()
  page: string = ''

  //String que representa um atributo do Array de items. Por exemplo: '.name' ou '.title' e etc.
  @Input()
  key: string = ''

  //String que representa a categoria para ser utilizada na chamada da API
  @Input()
  category!: Category

  //String que representa o título para cada página
  @Input()
  title: string = ''

  //Array seja de Personagem, Comics, Series e etc
  items: any[] = []
  total = 0
  options!: MarvelRequestOptions

  scroll$ = new Subject<number>()

  ngOnInit(): void {
    this.options = {
      limit: 100,
      offset: 0
    }

    this.getItems()

    this.scroll$.next(0)
  }

  getItems(){
    this.scroll$.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      concatMap(offset => {
        this.options.offset = offset
        return this.service.getData(this.category, this.options)
      })
      ).subscribe(data => this.handleResponse(data))
  }

  getImage(item: any) {
    return this.service.getImage(item.thumbnail, ImageTypes.portrait_uncanny)
  }

  handleResponse(data: any, reset: boolean = false) {
    this.items = reset ? data.results : [...this.items, ...data.results]
    this.total = data.total
    this.options.offset = this.options.offset || data.offset
  }

  onScroll(){
    const offset = this.options.offset + this.options.limit
    if(offset < this.total) {
      this.scroll$.next(offset)
    }
  }

  toDetails(item: any){
    this.dataService.setData(item)
  }

}
