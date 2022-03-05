import React from 'react'
import styles from './style.module.scss';
function Card({imgUrl,title}) {
  return (
    <figure className={styles.container}>
        <img src={imgUrl}/>
        <h3>{title}</h3>
        <button>Explore</button>
    </figure>
  )
}

export default Card;