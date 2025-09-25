import { memo } from 'react'
import styles from './Footer.module.css'
import Rectangle from '../../assets/img/Rectangle 5.jpg'

const Footer = memo(() => {
  return (
    <>
      <div className={styles.footerTop}>
        <p className={styles.title}>Контакты</p>
        <div className={styles.containerFooter}>
          <div className={styles.containerCreator}>
            <div className={styles.itemCreateor}>
              <p className={styles.profession}>Руководитель</p><span className={styles.name}>Кожаев Э.З.</span>
            </div>
            <div className={styles.itemCreateor}>
              <p className={styles.profession}>Разработчик</p><span className={styles.name}>Глушко А.С.</span>
            </div>
            <div className={styles.itemCreateor}>
              <p className={styles.profession}>Дизайнер</p><span className={styles.name}>Виктор А.</span>
            </div>
          </div>
          <div>
            <img className={styles.img} width={785} height={218} src={Rectangle} alt='Ростов-на-Дону' />
          </div>
        </div>
      </div>
    </>
  )
})

const Footer2 = memo(() => {
  return (
      <div className={styles.footerButtom}>
        <p className={styles.policies}>© 2025 Карта-на-Дону. Все права защищены. </p>
      </div>
  )
})

export {Footer, Footer2}
