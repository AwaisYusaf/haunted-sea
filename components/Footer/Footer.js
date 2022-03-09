import React from 'react';
import Link from 'next/link';
import styles from './style.module.scss';
function Footer() {
  return (
    <footer className={styles.container}>
        <div className={styles.container2}>
            <div className={styles.actions}>
                <div className={styles.signup}>
                    <h3>Stay in the loop</h3>
                    <p>Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and tips and tricks for navigating HauntedSea.</p>
                    <div>
                        <input/>
                        <button>Sign Up</button>
                    </div>
                </div>
                <div className={styles.links}>
                    <Link href="#explore">Explore</Link>
                    <Link href="#our-features">Our Features</Link>
                    <Link href="#">Pitchdeck</Link>
                    <Link href="#create">Create</Link>
                    <Link href="#contact-us">Contact Us</Link>
                </div>
            </div>
            <hr/>
            
            <div className={styles.details}>
                <div className={styles.left}>
                    <Link href="/">
                        <div className={styles.logo}>        
                            <img src="/assets/logo.png"/>
                            <h2>HauntedSea</h2>
                        </div>
                    </Link>
                    <span>
                        HauntedSea is the First decentralised NFT marketplace and Virtual World on the Fantom Opera Network. Buy, Sell, and discover exclusive digital items.
                    </span>
                </div>
                
                
                <div className={styles.right}>
                    <p>Copyright 2022 – All Rights Reserved HauntedSea</p>
                    <div className={styles.policyLinks}>
                        <Link href="#">Privacy Policy</Link>
                        <Link href="#">Terms of services</Link>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;