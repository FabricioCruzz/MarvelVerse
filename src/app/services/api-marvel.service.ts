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

  private API_KEY = `&ts=1&limit=100&apikey=${environment.publicKey}&hash=${environment.hash}`

  constructor(private http: HttpClient) { }

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
}
