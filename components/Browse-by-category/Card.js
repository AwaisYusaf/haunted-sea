import React from 'react'
import styles from './style.module.scss';
function Card({imgUrl,title,extraPadding}) {
  return (
    <figure className={styles.container}>
        <img src={imgUrl}/>
        <h3 style={extraPadding?{marginTop:'2.4em'}:{}}>{title}</h3>
        <button style={extraPadding?{marginTop: '2.4em'}:{}}>Explore</button>
    </figure>
  )
}

export default Card;