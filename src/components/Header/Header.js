import React, {useState} from 'react';
import styles from './Header.module.css';
import { Link } from 'react-scroll';

const Header = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return <header className={styles.navbar}>
    <div className={styles.nav_logo}><img src="/assets/name.svg" alt="Logo" /></div>
    
       <ul className={`${styles.nav_items} ${isOpen && styles.open}`}>
        <li> <Link
              activeClass='active'
              className='anchor_link'
              to={'hero'}
              spy={true}
              smooth={true}
              duration={500}
              offset={-90}
            >
                HOME
            </Link></li>
        <li> <Link
              activeClass='active'
              className='anchor_link'
              to={'about'}
              spy={true}
              smooth={true}
              duration={500}
              offset={-90}
            >
                ABOUT
            </Link></li>
        <li> <Link
              activeClass='active'
              className='anchor_link'
              to={'gallery'}
              spy={true}
              smooth={true}
              duration={500}
              offset={-90}
            >
                GALLERY
            </Link></li>
        <li> <Link
              activeClass='active'
              className='anchor_link'
              to={'form'}
              spy={true}
              smooth={true}
              duration={500}
              offset={-90}
            >
                CONTACT
            </Link></li>
            </ul>
    
    <div className={`${styles.nav_toogle} ${isOpen && styles.open}`} onClick={ () => setIsOpen(!isOpen)}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </header>;
}
export default Header;

/* const Header = () => {
  return <header className={styles.header_container}>
    <h1>
      <img src="/assets/name.svg" alt="Logo" />
    </h1>
    <nav>
      <ul>
        <li> <Link
              activeClass='active'
              className='anchor_link'
              to={'hero'}
              spy={true}
              smooth={true}
              duration={500}
              offset={-90}
            >
                HOME
            </Link></li>
        <li> <Link
              activeClass='active'
              className='anchor_link'
              to={'about'}
              spy={true}
              smooth={true}
              duration={500}
              offset={-90}
            >
                ABOUT
            </Link></li>
        <li> <Link
              activeClass='active'
              className='anchor_link'
              to={'gallery'}
              spy={true}
              smooth={true}
              duration={500}
              offset={-90}
            >
                GALLERY
            </Link></li>
        <li> <Link
              activeClass='active'
              className='anchor_link'
              to={'form'}
              spy={true}
              smooth={true}
              duration={500}
              offset={-90}
            >
                CONTACT
            </Link></li>
      </ul>
      .nav_toogle
    </nav>
  </header>;
};
 */