export interface PrismicObject {
  type: string
  text: string
  spans: any
}

export interface PrismicImageObject {
  dimensions: {
    width: number
    height: number
  }
  alt: string
  copyright: string
  url: string
}
