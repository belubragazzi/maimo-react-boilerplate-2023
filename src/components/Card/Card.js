import React from 'react'
import styles from './Card.module.css';


const Card = ({name, image}) => {
  return (
    <div className={`col_6 ${styles.gallery}`} >       
        <img src={image} alt={name} />
            <h3>{name}</h3>
   
    </div>
  )
}

export default Card