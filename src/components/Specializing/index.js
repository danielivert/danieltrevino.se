// @flow
import * as React from "react"
import styles from "./Specializing.module.scss"

const Specializing = () => (
  <div className={styles.container}>
    <div className={styles.title}>
      <h3>What I am specialized</h3>
    </div>
    <div className="columns is-multiline">
      <div className={`column is-one-third ${styles.skill}`}>1</div>
      <div className={`column is-one-third ${styles.skill}`}>2</div>
      <div className={`column is-one-third ${styles.skill}`}>3</div>
      <div className={`column is-one-third ${styles.skill}`}>4</div>
      <div className={`column is-one-third ${styles.skill}`}>5</div>
      <div className={`column is-one-third ${styles.skill}`}>6</div>
    </div>
  </div>
)

export default Specializing
