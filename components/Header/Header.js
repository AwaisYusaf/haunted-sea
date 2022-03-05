import React from 'react'
import styles from './style.module.scss';
import Image from 'next/image';
import Link from 'next/link';
function Header() {
  return (
    <header className={styles.container}>
      <Link href='/'>
        <div className={styles.logo}>      
          <img src="/assets/logo.png" height="40" width="40"/>
          <h3>HauntedSea</h3>
        </div>
      </Link>
      <div className={styles.search}>
        <img src="/assets/search.png" height="28" width="28"/>
        <input placeholder="Search NFT's"/>
      </div>
      <div className={styles.nav}>
        <Link href="/1">Explore</Link>
        <Link href="/1">Our Features</Link>
        <Link href="/1">Pitchdeck</Link>
        <Link href="/1">Create</Link>
        <Link href="/1">Contact Us</Link>
      </div>
      <div className={styles.headerActions}>
        <div className={styles.profile}>
          <img src={'/assets/Shape.png'} width="25" height="25"/>
        </div>
        <div className={styles.wallet}>
          <img src={'/assets/wallet.png'} width="37" height="37"/>
        </div>
      </div>
      <img src="/assets/menu.png" className={styles.menuicon} alt="Menu"/>
      <div className={styles.menu}>

      </div>
    </header>
  )
}
export default Header;