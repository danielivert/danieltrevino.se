// @flow
import * as React from "react"
import { Element } from "react-scroll"
import SocialMedia from "./SocialMedia"
import styles from "./Contact.module.scss"
import ScrollAnimation from "react-animate-on-scroll"

const Contact = () => (
  <Element name="Contact">
    <div className={styles.contact}>
      <div className={styles.space} />
      <div className={styles.container}>
        <div className={styles.body}>
          <ScrollAnimation animateIn="fadeIn" duration={1.8} animateOnce>
            <div className={styles.head}>
              <p className={styles.headTitle}>Contact me</p>
              <p className={styles.email}>hello@danieltrevino.se</p>
              <div className={styles.button}>
                <a href="mailto:hello@danieltrevino.se">Send email</a>
              </div>
            </div>

            <SocialMedia />
          </ScrollAnimation>
        </div>
      </div>
    </div>
  </Element>
)

export default Contact
