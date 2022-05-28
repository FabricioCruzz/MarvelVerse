import { Component, OnInit } from '@angular/core';
import { concatMap, debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { ImageTypes } from 'src/app/models/image.model';
import { Category, MarvelRequestOptions } from 'src/app/models/request.model';
import { MarvelStoriesResults } from 'src/app/models/response.model';
import { ApiMarvelService } from 'src/app/services/api-marvel.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: [
    './stories.component.css',
    '../characters/characters.component.css'
  ]
})
export class StoriesComponent implements OnInit {

  constructor(
    private service: ApiMarvelService,
    private dataService: DataService
  ) { }

  category: Category = 'stories'
  allStories: any[] = []
  total = 0
  options!: MarvelRequestOptions

  scroll$ = new Subject<number>()

  title: string = 'Choose A Story To Details'
  subtitle: string = 'Story'

  ngOnInit(): void {
    this.options = {
      limit: 100,
      offset: 0
    }

    this.getStories()

    this.scroll$.next(0)
  }

  getStories(){
    this.scroll$.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      concatMap(offset => {
        this.options.offset = offset
        return this.service.getData(this.category, this.options)
      })
    ).subscribe(data => this.handleResponse(data))
  }

  getImage(story: any){
    return this.service.getImage(story.thumbnail,ImageTypes.portrait_uncanny)
  }

  handleResponse(data: any, reset: boolean = false){
    this.allStories = reset ? data.results : [...this.allStories, ...data.results]
    this.total = data.total
    this.options.offset = this.options.offset || data.offset
    console.log(this.allStories)
  }

  toStory(story: MarvelStoriesResults){
    this.dataService.setData(story)
  }

}
