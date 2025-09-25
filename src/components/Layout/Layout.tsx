import { Outlet } from 'react-router'
import Header from '../Header/Header'
import styles from './Layout.module.css'
import { Footer, Footer2 } from '../Footer/Footer'

const Layout = () => {
  return (
    <div className={styles.layout}>
        <div className={styles.header}>
            <Header/>
        </div>
        <main className={styles.main}>
            <Outlet/>
        </main>
        <div className={styles.footer}>
            <Footer/>
            <Footer2/>
        </div>
    </div>
  )
}

export default Layout