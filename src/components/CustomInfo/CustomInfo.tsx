import styles from './CustomInfo.module.css'
import Rectangle from '../../assets/img/Rectangle 12.png'

const CustomInfo = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textTitle}>
                    <h2 className={styles.title}>Карта как <span className={styles.logo}>искусство</span></h2>
                </div>
                <div className={styles.customInfo}>
                    <div className={styles.containerBottom}>
                        <div className={styles.containerText}>
                            <div>
                                <p className={styles.textInfo}>Наш сайт — это интерактивная карта Ростова-на-Дону с уникальным дизайном, которая превращает обычную прогулку в увлекательное приключение. </p>
                            </div>
                            <div>
                                <p className={styles.textInfo}>Мы соединили красоту визуала, удобство навигации и дух соревнования. Здесь ты не просто найдешь дорогу — ты сможешь узнать город с новой стороны, выполнить задания и побороться за звание лучшего знатока Ростова!</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.wrapper}>
                        <img className={styles.img} src={Rectangle} alt='Ростов-на-Дону' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomInfo
