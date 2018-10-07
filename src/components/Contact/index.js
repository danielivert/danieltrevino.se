// @flow
import * as React from "react"
import Title from "components/Title"
import styles from "./Contact.module.scss"

const Contact = () => (
  <section className={styles.contact}>
    <div className={styles.space} />
    <div className={styles.container}>
      <div className={styles.body}>
        <div className={styles.head}>
          <Title text="Contact" />
        </div>
      </div>
    </div>
  </section>
)

export default Contact
