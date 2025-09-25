import Banner from '../components/Banner/Banner'
import CustomInfo from '../components/CustomInfo/CustomInfo'
import styles from './Abouts.module.css'
import Rectangle from '../assets/img/Rectangle 4-1.jpg'
import Rectangle2 from '../assets/img/Rectangle 4-2.jpg'

const Abouts = () => {
  return (
    <>
      <Banner
        size='bg'
        img={Rectangle}
        withButton={false}
        title='Исследуй Ростов-на-Дону по-новому!'
        description='Это не просто карта — это твой цифровой гид, твой проводник и твой шанс выиграть крутые призы! Участвуй в городском квесте, открывай тайны донской столицы и делися своими открытиями.'
      />
      <div className={styles.info}>
        <CustomInfo/>
      </div>
      <Banner
        size='bg'
        img={Rectangle2}
        withButton={false}
        title='Команда энтузиастов'
        description='Мы — группа местных гидов, дизайнеров и программистов, влюбленных в Ростов-на-Дону. Наша цель — показать горожанaм и гостям города его современный ритм и богатую историю через технологию, творчество и игровой формат. Мы верим, что лучший способ узнать место — это исследовать его с интересом.'
      />
    </>
  )
}

export default Abouts
