// @flow
import React from "react"
import styles from "./Navigation.module.scss"
import { Link } from "react-scroll"

type MenuItemProps = {
  text: string
}

const MenuItem = ({ text }: MenuItemProps) => (
  <Link
    className={styles.listItem}
    activeClass="active"
    to={text}
    spy={true}
    smooth={true}
    offset={50}
    duration={500}
  >
    {text}
  </Link>
)

const MenuList = () => (
  <ul className={styles.menuList}>
    <MenuItem text="About" />
    <MenuItem text="Work" />
    <MenuItem text="Contact" />
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
