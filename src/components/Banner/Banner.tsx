import { type FC } from 'react'
import styles from './Banner.module.css'
import Button from '../Button/Button'

interface IBanner {
  title: string,
  description: string,
  withButton: boolean,
  img: string,
  size: 'sm' | 'bg'
}

const Banner: FC<IBanner> = ({ title, description, withButton, img, size }) => {
  return (
    <>
      {size == 'bg' ?
        <div className={styles.banner}>
          <div className={styles.imgBlock}>
            <img className={styles.img} src={img} />
          </div>
          <div className={styles.container}>
            <div className={styles.title}>
              {title}
            </div>
            <div className={styles.description}>
              {description}
            </div>
            {withButton &&
              <div className={styles.button}>
                <Button type='button'>К карте</Button>
              </div>
            }
          </div>
        </div>
        :
        <div className={styles.bannerSM}>
          <div className={styles.imgBlockSM}>
            <img className={styles.imgSM} src={img} />
          </div>
          <div className={styles.containerSM}>
            <div className={styles.title}>
              {title}
            </div>
          </div>
        </div>
      }
    </>

  )
}

export default Banner
