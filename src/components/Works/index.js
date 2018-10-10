// @flow
import * as React from "react"
import Title from "components/Title"
import Card from "components/Card"
import danieltrevinoImg from "../../images/danieltrevino.se.png"
import hitchrisImg from "../../images/hitchris.se.png"
import styles from "./Works.module.scss"

const Works = () => (
  <section className={styles.container}>
    <div className={styles.head}>
      <Title text="My Works" />
    </div>
    <div className={styles.body}>
      <Card title="Danieltrevino.se" img={danieltrevinoImg} />
      <Card title="Hitchris.se" img={hitchrisImg} />
    </div>
  </section>
)

export default Works
