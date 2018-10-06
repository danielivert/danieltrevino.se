// @flow
import React from "react"
import styles from "./Footer.module.scss"

const Footer = () => (
  <div className={styles.footer}>
    <p>
      Made with ❤️ by{" "}
      <a
        href="https://twitter.com/danielivert"
        rel="noopener noreferrer"
        target="_blank"
      >
        Daniel Treviño
      </a>
    </p>
  </div>
)

export default Footer
