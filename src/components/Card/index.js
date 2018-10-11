// @flow
import * as React from "react"

import styles from "./Card.module.scss"

type Props = {
  title: string,
  img: string
}

// const Card = ({ title, img }: Props) => (
//   <div
//     className={styles.container}
//     style={{
//       backgroundImage: `url(${img})`
//     }}
//   >
//     <div className={styles.body}>
//       <div className={styles.title}>
//         <h4>{title}</h4>
//       </div>
//       <div className={styles.button}>
//         <p>View Project</p>
//       </div>
//     </div>
//   </div>
// )

const Card = ({ title, img }: Props) => (
  <div
    className={styles.container}
    style={{
      backgroundImage: `url(${img})`
    }}
  >
    <p>{title}</p>
  </div>
)

export default Card
