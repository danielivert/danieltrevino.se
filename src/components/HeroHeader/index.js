// @flow
import * as React from "react"
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
        <div className={styles.container}>
          <div className={styles.head}>
            <h1>
              {heroHeader.title}
              <span>{heroHeader.span}</span>
            </h1>
          </div>
          <div className={styles.body}>
            {heroHeader.body.map(item => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      )
    }}
  />
)

export default HeroHeader
