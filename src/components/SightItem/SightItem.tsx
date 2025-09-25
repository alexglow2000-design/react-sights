import { type FC } from 'react'
import styles from './SightItem.module.css'
import { useNavigate } from 'react-router-dom'

interface ISightItemProps{
  id: number,
  img: string,
  title: string,
  rate: string,
  location: string
}


const SightItem: FC<ISightItemProps> = ({id, img, title, rate, location}) => {

  const navigate = useNavigate()
  
  return (
    <div className={styles.sightList} onClick={() => navigate('/sight/' + id)}>
      <div className={styles.sightItem}>
        <div className={styles.containerColumn}>
          <div className={styles.centerIMG}>
            <img className={styles.img} width={197} height={153} src={'https://rostov-on-map-api.onrender.com/static/' + img} alt={title}/>
          </div>
          <div className={styles.textGroup}>
            <p className={styles.textSight}>{title}</p>
          </div>
        </div>
        <div>
          <div className={styles.rateBox}>
            <p className={styles.textRate}>{rate}/5</p>
          </div>
        </div>
        <div className={styles.locationPlace}>
          <p className={styles.textSight}>{location}</p>
        </div>
      </div>
    </div>
  )
}

export default SightItem
