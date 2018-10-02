// @flow
import React from "react"
import styles from "./Navigation.module.scss"

type MenuItemProps = {
  text: string
}

const MenuItem = ({ text }: MenuItemProps) => (
  <li className={styles.listItem}>{text}</li>
)

const MenuList = () => (
  <ul className={styles.menuList}>
    <MenuItem text="Home" />
  </ul>
)

const Navigation = () => (
  <header className={styles.navigation}>
    <div className={styles.container}>
      <MenuList />
    </div>
  </header>
)
export default Navigation
