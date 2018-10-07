// @flow
import * as React from "react"
import Title from "components/Title"
import styles from "./Works.module.scss"

const Works = () => (
  <section className={styles.container}>
    <div className={styles.head}>
      <Title text="My Works" />
    </div>
  </section>
)

export default Works
