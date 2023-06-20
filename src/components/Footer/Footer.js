import React from 'react'
import styles from './Footer.module.css';
const Footer = () => {
  return (
    <footer className={styles.hello}>
    <h4 >Para ver los trabajos del día a día, seguinos en las redes</h4>
    <ul class="redes">
        <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
        <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
    </ul>
</footer>
  )
}

export default Footer