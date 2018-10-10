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
  logo: string,
  title: string,
  spin?: boolean
}

const SkillBox = ({ logo, title, spin = false }: SkillBoxProps) => (
  <div className={`column is-6-mobile is-4-desktop ${styles.skill}`}>
    <div className={`${styles.boxLogo} ${spin ? styles.spin : ""}`}>
      <img src={logo} />
    </div>
    <div className={styles.boxTitle}>
      <h4>{title}</h4>
    </div>
  </div>
)

const Specializing = () => (
  <div className={styles.container}>
    <Title text="I specialize in" />
    <div className="columns is-multiline is-mobile">
      <SkillBox logo={reactLogo} title="React" spin />
      <SkillBox logo={webpackLogo} title="Webpack" />
      <SkillBox logo={sassLogo} title="Sass modules" />
      <SkillBox logo={reduxLogo} title="Redux" />
      <SkillBox logo={mobxLogo} title="MobX" />
      <SkillBox logo={flowLogo} title="Flow" />
    </div>
  </div>
)

export default Specializing
