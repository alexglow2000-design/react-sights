import { type FC } from 'react'
import styles from './CardAbout.module.css'

interface ICardAboutProps{
  id: number,
  title: string,
  img: string
}

const CardAbout: FC<ICardAboutProps> = ({id, title, img}) => {
  return (
    <div className={styles.card}
     style={{flexDirection: id == 2 || id == 3 ? 'row-reverse' : undefined}}
     >
      <div>
        <img className={styles.img} src={img} alt={title}/> 
      </div>
      <div className={styles.container}>
        <div
          style={{display: 'flex', flexDirection: id == 2 || id == 3 ? 'row-reverse' : undefined}}>
          <p className={styles.number}>{id}</p>
        </div>
        <div>
            <p className={styles.title}>{title}</p>
        </div>
      </div>
    </div>
  )
}

export default CardAbout
