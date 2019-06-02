export interface PrismicObject {
  html: string
  text: string
  raw: {
    type:
      | 'heading1'
      | 'heading2'
      | 'heading3'
      | 'heading4'
      | 'heading5'
      | 'heading6'
    text: string
  }
}

export interface PrismicImageObject {
  alt: string
  localfile: {
    childImageSharp: any
  }
  url: string
}