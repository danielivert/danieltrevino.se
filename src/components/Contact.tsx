import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import {
  primaryColor,
  secondaryColor,
  textColorSecondary
} from '../utils/variables'
import {
  PrismicObject,
  PrismicImageObject
} from '../interfaces/PrismicInterface'
import Image from './Image'
import { media } from '../utils/media'
import AnimateIns from './AnimateIns'

export interface IContactPrismic {
  prismicHomepageBodyContactSection: {
    slice_type: string
    primary: {
      contact_title: PrismicObject
      email: PrismicObject
    }
    items: Array<ISocialMedia>
  }
}

interface ISocialMedia {
  social_media_icon: PrismicImageObject
  social_media_url: {
    url: string
    target: string
  }
}

const Img = styled(Image)`
  margin: 0 auto;
  object-fit: cover;

  img {
    height: 50px;
    width: 50px;

    ${media.phone`
      height: 30px;
      width: 30px;
    `}
  }
`

const Wrapper: any = styled.div`
  &:before {
    position: absolute;
    z-index: 0;
    left: -2px;
    right: -5px;
    top: -100px;
    height: 150px;
    width: calc(100% + 5px);
    -webkit-transform: rotate(-2deg);
    -ms-transform: rotate(-2deg);
    transform: rotate(-2deg);
    content: '';
    background: ${(p: any) =>
      p.primaryColor ? `${primaryColor}` : `${secondaryColor}`};
  }

  position: relative;
  width: 100%;
  background: ${(p: any) =>
    p.primaryColor ? `${primaryColor}` : `${secondaryColor}`};
  color: ${textColorSecondary};
  height: 80vh;
  display: flex;
  align-items: center;
`

const Container = styled.div`
  position: relative;
  padding: 3rem 3rem;
  display: flex;
  text-align: center;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: 500px;

  ${media.phone`
    padding: 3rem 1rem;
  `}
`

const Title = styled.h2`
  margin-bottom: 5rem;
`

const Email = styled.a`
  font-size: 2rem;
  margin-bottom: 5rem;

  ${media.phone`
    font-size: 1.5rem;
  `}
`

const SocialMediasWrapper = styled(AnimateIns)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const ItemWrapper = styled.div`
  &:hover {
    transform: translateY(0px) scale(1.2) translateZ(0px);
  }
`

const SocialMediaItem = ({
  url,
  image
}: {
  url: { url: string; target: string }
  image: PrismicImageObject
}) => {
  return (
    <ItemWrapper>
      <a href={url.url} target={url.target} rel="noopener noreferrer">
        <Img image={image} fallbackAlt="Social media logo" />
      </a>
    </ItemWrapper>
  )
}

const Contact = ({ primaryColor = false }: { primaryColor?: boolean }) => {
  const result: IContactPrismic = useStaticQuery(contactQuery)
  const title =
    result.prismicHomepageBodyContactSection.primary.contact_title.text
  const email = result.prismicHomepageBodyContactSection.primary.email.text
  const socialMedias: Array<ISocialMedia> =
    result.prismicHomepageBodyContactSection.items

  return (
    <Wrapper primaryColor={primaryColor}>
      <Container>
        <Title>{title}</Title>
        <Email href={`mailto:${email}`}>{email}</Email>
        <SocialMediasWrapper delay={100} offset={50}>
          {socialMedias.map((socialMedia: ISocialMedia, i: number) => {
            return (
              <SocialMediaItem
                url={socialMedia.social_media_url}
                image={socialMedia.social_media_icon}
                key={i}
              />
            )
          })}
        </SocialMediasWrapper>
      </Container>
    </Wrapper>
  )
}

export default Contact

export const contactQuery = graphql`
  query ContactQuery {
    prismicHomepageBodyContactSection {
      slice_type
      primary {
        contact_title {
          text
          html
        }
        email {
          text
          html
        }
      }
      items {
        social_media_icon {
          localFile {
            childImageSharp {
              fluid(maxWidth: 450, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          url
          alt
        }
        social_media_url {
          url
          target
        }
      }
    }
  }
`
