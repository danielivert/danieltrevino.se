// @flow
import * as React from "react"
import { Element } from "react-scroll"
import { StaticQuery, graphql } from "gatsby"
import styles from "./HeroHeader.module.scss"

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
                <span className={styles.name}>{heroHeader.span}</span>
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
