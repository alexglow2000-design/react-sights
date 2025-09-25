import type { IAbout } from '../../types/types'
import CardAboutList from '../CardAboutList/CardAboutList'
import styles from './Abouts.module.css'
import Rectangle1 from '../../assets/img/Rectangle 4-4.jpg'
import Rectangle2 from '../../assets/img/Rectangle 11.jpg'
import Rectangle3 from '../../assets/img/Reactangle 15.jpg'
import Rectangle4 from '../../assets/img/Rectangle 16.jpg'


const about: IAbout[] = [
    {id: 1, title: 'Вся информация о культурный объектахв одном месте. ', img: Rectangle1},
    {id: 2, title: 'Прогулки по знаковым и малоизвестным местам без лишних хлопот.', img: Rectangle2},
    {id: 3, title: 'Краткие описания и фото помогут глубже понять культуру Ростова.', img: Rectangle3},
    {id: 4, title: 'Приятный интерфейс делает навигацию по карте простой и удобной.', img: Rectangle4},
]

const About = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>О нашем сайте <span className={styles.logo}>Карта-на-Дону</span></h2>
      <CardAboutList cardAboutList={about}/>
    </div>
  )
}

export default About
