// @flow
import * as React from "react"
import Responsive from "react-responsive"
import styles from "./Card.module.scss"

type Props = {
  imgDesktop: string,
  imgMobile?: string,
  href: string
}

const Desktop = props => <Responsive {...props} minWidth={992} />
const Mobile = props => <Responsive {...props} maxWidth={991} />

const Card = ({ imgDesktop, imgMobile = imgDesktop, href }: Props) => (
  <div className={styles.container}>
    <Desktop>
      <img src={imgDesktop} />
    </Desktop>
    <Mobile>
      <img src={imgMobile} />
    </Mobile>
    <div className={styles.footer}>
      <div className={styles.button}>
        <a href={href} target="_blank" rel="noopener noreferrer">
          Visit Site
        </a>
      </div>
    </div>
  </div>
)

export default Card
