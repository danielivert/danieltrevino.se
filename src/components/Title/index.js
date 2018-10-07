// @flow
import * as React from "react"
import styles from "./Title.module.scss"

type Props = {
  text: string
}

const Title = ({ text }: Props) => (
  <div className={styles.body}>
    <h3>{text}</h3>
  </div>
)

export default Title
