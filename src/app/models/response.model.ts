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
  results: MarvelResults

}

export interface MarvelResults {

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
