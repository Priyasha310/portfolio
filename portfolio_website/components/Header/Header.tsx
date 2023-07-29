import React from 'react'
import styles from './header.module.scss'
import Image from 'next/image'
import logo from '../../images/logo.png'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div id={styles.header}>
      <div className={styles.header}>
        <div className={`${styles.container}`}>
          <div className={styles.headerText}>
            <p>Software Developer</p>
            <h1>Hello! I'm <br/>
              <span>Priyasha Parnavi</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar