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
                    <Link href="#">Explore</Link>
                    <Link href="#">Our Features</Link>
                    <Link href="#">Pitchdeck</Link>
                    <Link href="#">Create</Link>
                    <Link href="#">Contact Us</Link>
                </div>
            </div>
            <hr/>
            
            <div className={styles.details}>
                <div className={styles.left}>
                    <div className={styles.logo}>        
                        <img src="/assets/logo.png"/>
                        <h2>HauntedSea</h2>
                    </div>
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