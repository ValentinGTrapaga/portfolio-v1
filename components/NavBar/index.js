import Link from 'next/link'
import React from 'react'
import {
  AiOutlineCode,
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFileSearch
} from 'react-icons/ai'
import styles from './styles.module.css'

export const NavBar = () => {
  return (
    <nav className={styles.navBarContainer}>
      <div className={styles.navBar}>
        <ul className={styles.navList}>
          <Link href='/'>
            <li className={styles.navItem}>
              <AiOutlineHome className={styles.navIcon} />
              Home
            </li>
          </Link>
          <Link href='https://docs.google.com/document/d/1MOP3ApkptX7hTY30woxiLmEScX_BD3q3/edit?usp=sharing&ouid=103532927219661287514&rtpof=true&sd=true'>
            <li className={styles.navItem}>
              <AiOutlineFileSearch className={styles.navIcon} />
              Resume
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}
