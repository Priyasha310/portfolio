'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import styles from './navbar.module.scss'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuOpen = () => {
      setIsMenuOpen(true);
    };
  
    const handleMenuClose = () => {
      setIsMenuOpen(false);
    };
    return (
    <div id={styles.navbar}>
        <div className={styles.header}>
            <div className={`${styles.container}`}>
                <nav>
                    <div className={styles.logo}>Priyasha Parnavi</div>            
                    {/* <Image className={styles.logo} src={logo} alt=''/>             */}
                    <ul id={styles.sideMenu} style={{ right: isMenuOpen ? '0' : '-220px' }}>
                        <li> <Link href='#home'>Home</Link> </li>
                        <li> <Link href='#about' >About</Link> </li>
                        {/* <li> <Link href='' className="text-gray-500 pointer-events-none opacity-50 cursor-not-allowed">Projects</Link> </li> */}
                        <li> <Link href='#contact'>Contact</Link> </li>
                        <span className={styles.menu} onClick={handleMenuClose}>X</span>
                    </ul>
                    <span className={styles.menu} onClick={handleMenuOpen}>&equiv;</span>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Navbar