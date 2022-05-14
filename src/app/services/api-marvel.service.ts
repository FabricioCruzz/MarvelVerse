import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ImageThumbanil, ImageTypes } from '../models/image.model';
import { Category, MarvelRequestOptions } from '../models/request.model';
import { MarvelData, MarvelResponse } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class ApiMarvelService {

  // private PUBLIC_KEY = 'b2a9da6b64c0ad9cf0e7552a315a30ad'
  // private HASH = '9a7e1cab451a2967ffb2548b6ffe5838'
  // private API_KEY = `&ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`
  // private BASE_URL = 'https://gateway.marvel.com/v1/public/'
  // private URL_CHARACTERS = this.BASE_URL + `characters?ts=1&limit=100&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`

  private API_KEY = `&ts=1&apikey=${environment.publicKey}&hash=${environment.hash}`



  private queries = [
    'characters',
    'comics',
    'events',
    'series',
    'stories'
  ]

  private options = {
    headers: {
      'Accept': '*/*',
    }
  }

  constructor(private http: HttpClient) { }

  // getList(description: string, offset: number): Observable<any> {
  //   const url = `${this.BASE_URL}${description}?limit=100&offset=${offset}${this.API_KEY}`
  //   return this.http.get(url, this.options)
  // }

  getImage(thumbnail: ImageThumbanil, type: ImageTypes = ImageTypes.full) {
    return thumbnail && `${thumbnail.path}/${type}.${thumbnail.extension}`
  }

  getData(category: Category, options?: MarvelRequestOptions): Observable<MarvelData | undefined> {
    let url = `${environment.baseUrl}${category}?${this.API_KEY}`
    if(options) {
      Object.entries(options).forEach(([key, value]) => url += `&${key}=${value}`)
    }
    return this.http.get<MarvelResponse>(url).pipe(map(response => {
      return response.data
    }))
  }

  getAllCharacters(): Observable<any> {
    const url = `${environment.baseUrl}${this.queries[0]}?${this.API_KEY}`
    return this.http.get<any>(url)
    .pipe(map((data: any) => data.data.results))
  }

  getAllComics(): Observable<any> {
    const url = `${environment.baseUrl}${this.queries[1]}?limit=100&offset=100${this.API_KEY}`
    return this.http.get<any>(url)
    .pipe(map((data: any) => data.data.results))
  }

  getAllEvents(): Observable<any> {
    const url = `${environment.baseUrl}${this.queries[2]}?limit=100&offset=100${this.API_KEY}`
    return this.http.get<any>(url)
    .pipe(map((data: any) => data.data.results))
  }

  getAllSeries(): Observable<any> {
    const url = `${environment.baseUrl}${this.queries[3]}?limit=100&offset=100${this.API_KEY}`
    return this.http.get<any>(url)
    .pipe(map((data: any) => data.data.results))
  }

  getAllStories(): Observable<any> {
    const url = `${environment.baseUrl}${this.queries[4]}?limit=100&offset=100${this.API_KEY}`
    return this.http.get<any>(url)
    .pipe(map((data: any) => data.data.results))
  }

}
