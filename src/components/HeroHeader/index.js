// @flow
import * as React from "react"
import ContainerViewPort from "../ContainerViewPort"
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
        <ContainerViewPort viewPort={70} className={styles.container}>
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
        </ContainerViewPort>
      )
    }}
  />
)

export default HeroHeader
