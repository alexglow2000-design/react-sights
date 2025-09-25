import Banner from '../components/Banner/Banner'
import About from '../components/About/About'
import Rectangle from '../assets/img/Rectangle 4.jpg'
import styles from './Main.module.css'
import MapRegion from '../components/MapRegion/MapRegion'

const Main = () => {
  return (
    <div className={styles.main}>
      <Banner
        size='bg'
        img={Rectangle}
        withButton={true}
        title='Добро пожаловать в Ростов-на-Дону. Твой Ростов. Твоя карта.'
        description='Вся жизнь города в реальном времени. Узнайте, какие проекты меняют Ростов прямо сейчас, 
          найдите ближайшее событие и постройте маршрут будущей прогулки.'
      />
      <About/>
      <MapRegion/>
    </div>
  )
}

export default Main
