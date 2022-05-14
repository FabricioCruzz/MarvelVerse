export interface CharacterDetail {

  id: number
  name: string
  description: string
  thumbnail: Thumbnail | undefined
}

export interface Thumbnail {

  path: string
  extension: string

}
