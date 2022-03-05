import React from 'react';
import styles from './style.module.scss';
function Card({isLive,imgSrc,title,details}) {
  return (
      <figure className={styles.container} style={{background:`url(${imgSrc})`}}>
          <div className={styles.live}>
              <div>{isLive ?"Live":""}</div>
            </div>
          <div className={styles.content}>
              <p>{title}</p>
              <span>{details}</span>
          </div>
      </figure>
  )
}

export default Card