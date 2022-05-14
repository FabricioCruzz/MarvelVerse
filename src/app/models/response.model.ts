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
