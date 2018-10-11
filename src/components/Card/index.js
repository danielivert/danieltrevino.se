// @flow
import * as React from "react"

import styles from "./Card.module.scss"

type Props = {
  img: string
}

const Card = ({ img }: Props) => (
  <div
    className={styles.container}
    style={{
      backgroundImage: `url(${img})`
    }}
  />
)

export default Card
