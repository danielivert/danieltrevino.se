// @flow
import React from "react"
import styles from "./Navigation.module.scss"
import { Link } from "react-scroll"

type MenuItemProps = {
  text: string,
  offset: number
}

const MenuItem = ({ text, offset }: MenuItemProps) => (
  <Link
    className={styles.listItem}
    activeClass="active"
    to={text}
    spy={true}
    smooth={true}
    offset={offset}
    duration={500}
  >
    {text}
  </Link>
)

const MenuList = () => (
  <ul className={styles.menuList}>
    <MenuItem text="About" offset={0} />
    <MenuItem text="Work" offset={-50} />
    <MenuItem text="Contact" offset={0} />
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
