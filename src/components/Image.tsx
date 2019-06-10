import React, { useEffect, useState } from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import get from 'lodash/get'
import { supportsWebp } from '../utils/imageUtils'
import { PrismicImageObject } from '../interfaces/PrismicInterface'

const Wrapper = styled.div`
  img {
    width: 100%;
    margin: 0;
  }
`

interface IProps {
  onLoad?: Function
  image: PrismicImageObject
  className?: string
  critical?: any
  fallbackAlt: string
  blur?: boolean
}

const Image = ({
  onLoad,
  image,
  className,
  critical,
  fallbackAlt,
  blur = false
}: IProps) => {
  const [src, setImgSrc] = useState()

  const loadImage = async () => {
    const supported = await supportsWebp()
    const newSrc = supported
      ? get(image, 'localFile.childImageSharp.fluid.srcWebp')
      : get(image, 'localFile.childImageSharp.fluid.src')
    setImgSrc(newSrc)
  }

  useEffect(() => {
    if (image && image.localFile) {
      loadImage()
    }
  }, [])

  if (!image || Object.values(image).filter(Boolean).length === 0) {
    return null
  }

  const { alt, url } = image

  if (!image.localFile) {
    return (
      <Wrapper className={className}>
        <img alt={alt || fallbackAlt} onLoad={url && onLoad} src={url} />
      </Wrapper>
    )
  }

  const imageExists = image.localFile.childImageSharp

  if (blur && !imageExists) {
    console.warn(
      'The blur effect will not work if there is an empty childImageSharp object'
    )
  }

  if (blur && image.localFile && imageExists) {
    return (
      <Wrapper className={className}>
        <Img
          alt={alt || fallbackAlt}
          onLoad={url && onLoad}
          fluid={image.localFile.childImageSharp.fluid}
        />
      </Wrapper>
    )
  }

  const defaultImage = critical
    ? get(image, 'localFile.childImageSharp.fluid.src')
    : get(image, 'localFile.childImageSharp.fluid.base64')

  // src = checks if the image is fully loaded as srcWebp
  // defaultImage = checks if the image comes as base64
  // image.url = defaults to the public url of the image (Ex. SVG images)
  const imgSrc = src || defaultImage || image.url

  return (
    <Wrapper className={className}>
      <img alt={alt || fallbackAlt} onLoad={src && onLoad} src={imgSrc} />
    </Wrapper>
  )
}

export default Image
