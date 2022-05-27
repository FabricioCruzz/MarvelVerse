import { ImageThumbanil } from "./image.model"

export interface MarvelResponse {

  code: number
  status: string
  copyright: string
  atribuitionText: string
  atribuitionHTML: string
  etag: string
  data: MarvelData
}

export interface MarvelData {

  offset: number
  limit: number
  total: number
  count: number
  results: any[]

}

export interface MarvelCharacterResults {

  id: number
  name: string
  description: string
  modified: Date
  resourceURI: string
  urls: any[]
  thumbnail: ImageThumbanil
  comics: any[]
  stories: any[]
  events: any[]
  series: any[]

}

export interface MarvelComicsResults {

  id: number,
  digitalId: number,
  title: string,
  issueNumber: number,
  variantDescription: string,
  description: string,
  modified: Date,
  isbn: string,
  upc: string,
  diamondCode: string,
  ean: string,
  issn: string,
  format: string,
  pageCount: number,
  textObjects: any[],
  resourceURI: string,
  urls: any[],
  series: any,
  variants: any[],
  collections: any[],
  collectedIssues: any[],
  dates: any[],
  prices: any[],
  thumbnail: ImageThumbanil,
  images: any[],
  creators: any,
  characters: any,
  stories: any,
  events: any

}

export interface MarvelSeriesResults {

  id: number,
  title: string,
  description: string,
  resourceURI: string,
  urls: any[],
  startYear: number,
  endYear: number,
  rating:string,
  modified: Date,
  thumbnail: ImageThumbanil,
  comics: any,
  stories: any,
  events: any,
  characters: any,
  creators:any,
  next: any,
  previous:any
  
}
