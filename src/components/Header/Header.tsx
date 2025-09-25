import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
        <div>
          <h2 className={styles.logo}>Карта-на-Дону</h2>
        </div>
        <div className={styles.navBar}>
          <Link className={styles.link} to='/'>Главная</Link>
          <Link className={styles.link} to='sights'>Достопримечательности</Link>
          <Link className={styles.link} to='about'>О сайте</Link>
        </div>
    </header>
  )
}

export default Header
