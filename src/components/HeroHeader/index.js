// @flow
import * as React from "react"
import { Element } from "react-scroll"
import { StaticQuery, graphql } from "gatsby"
import styles from "./HeroHeader.module.scss"
import posed from "react-pose"

const Name = posed.span({
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 350
    }
  },
  exit: {
    opacity: 1,
    scale: 0
  }
})

const HeroHeader = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            heroHeader {
              title
              span
              body
            }
          }
        }
      }
    `}
    render={(data: Object) => {
      const { heroHeader } = data.site.siteMetadata

      return (
        <Element name="About">
          <div className={styles.container}>
            <div className={styles.head}>
              <h1>
                <span className={styles.waver}>👋 </span>
                {heroHeader.title}
                <Name className={styles.name} pose="enter" initialPose="exit">
                  {heroHeader.span}
                </Name>
              </h1>
            </div>
            <div className={styles.body}>
              {heroHeader.body.map(item => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
        </Element>
      )
    }}
  />
)

export default HeroHeader
