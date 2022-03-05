import React from 'react'
import styles from './style.module.scss';
function Card({title,imgUrl,content}) {
  return (
    <div className={styles.container} style={{background:`url(${imgUrl})`}}>
        <h2>{title}</h2>
        <p>{content}</p>
    </div>
  )
}

export default Card;