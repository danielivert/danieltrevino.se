// @flow
import * as React from "react"
import Title from "components/Title"
import reactLogo from "../../images/react-logo.svg"
import webpackLogo from "../../images/webpack-logo.svg"
import sassLogo from "../../images/sass-logo.svg"
import reduxLogo from "../../images/redux-logo.svg"
import mobxLogo from "../../images/mobx-logo.svg"
import flowLogo from "../../images/flow-logo.svg"
import styles from "./Specializing.module.scss"

type SkillBoxProps = {
  href: string,
  logo: string,
  title: string,
  spin?: boolean
}

const SkillBox = ({ href, logo, title, spin = false }: SkillBoxProps) => (
  <div className={`column is-6-mobile is-4-desktop ${styles.skill}`}>
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div className={`${styles.boxLogo} ${spin ? styles.spin : ""}`}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.boxTitle}>
        <h4>{title}</h4>
      </div>
    </a>
  </div>
)

const Specializing = () => (
  <div className={styles.container}>
    <Title text="I specialize in" />
    <div className="columns is-multiline is-mobile">
      <SkillBox
        href="https://reactjs.org/"
        logo={reactLogo}
        title="React"
        spin
      />
      <SkillBox
        href="https://webpack.js.org/"
        logo={webpackLogo}
        title="Webpack"
      />
      <SkillBox
        href="https://sass-lang.com/"
        logo={sassLogo}
        title="Sass modules"
      />
      <SkillBox href="https://redux.js.org/" logo={reduxLogo} title="Redux" />
      <SkillBox
        href="https://github.com/mobxjs/mobx"
        logo={mobxLogo}
        title="MobX"
      />
      <SkillBox href="https://flow.org/" logo={flowLogo} title="Flow" />
    </div>
  </div>
)

export default Specializing
