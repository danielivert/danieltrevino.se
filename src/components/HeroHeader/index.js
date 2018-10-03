// @flow
import * as React from "react"
import styles from "./HeroHeader.module.scss"

const HeroHeader = () => (
  <div className={styles.container}>
    <div className={styles.head}>
      <h1>
        👋 Hello, I am <span>Daniel Treviño</span>
      </h1>
    </div>
    <div className={styles.body}>
      <p>Fullstack Website Developer</p>
      <p>Based in Stockholm, Sweden 🇸🇪</p>
    </div>
  </div>
)

export default HeroHeader
