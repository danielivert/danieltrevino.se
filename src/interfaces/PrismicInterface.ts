export interface PrismicObject {
  html: string
  text: string
  raw: any
}

export interface PrismicImageObject {
  alt: string
  localfile: {
    childImageSharp: any
  }
  url: string
}
