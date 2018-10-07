// @flow
import * as React from "react"
import twitterLogo from "../../images/twitter-logo.svg"
import facebookLogo from "../../images/facebook-logo.svg"
import linkedInLogo from "../../images/linkedin-logo.svg"
import githubLogo from "../../images/github-logo.svg"
import styles from "./SocialMedia.module.scss"

type ItemProps = {
  logo: string,
  href: string
}

const Item = ({ logo, href }: ItemProps) => (
  <div className={styles.item}>
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img src={logo} />
    </a>
  </div>
)

const SocialMedia = () => (
  <div className={styles.container}>
    <Item logo={twitterLogo} href="https://twitter.com/danielivert" />
    <Item logo={facebookLogo} href="https://www.facebook.com/daniel.trevi" />
    <Item
      logo={linkedInLogo}
      href="https://www.linkedin.com/in/danieltrevino92/"
    />
    <Item logo={githubLogo} href="https://github.com/danielivert" />
  </div>
)

export default SocialMedia
