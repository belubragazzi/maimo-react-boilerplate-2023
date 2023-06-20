import React from 'react'
import Card from '../Card/Card'
import styles from './CardsContainer.module.css';
import data from '../../utils/dummyData'


const CardsContainer = () => {

  return (
    <div className={styles.gallery_art}>
       <h2>Gallery</h2>
    <section className={`grid ${styles.gallery_container}`}>
   
    {data.map(({name, image}) => (
      <Card name={name} image={image}/>
    ))}

      </section>
    </div>
  )
}

export default CardsContainer