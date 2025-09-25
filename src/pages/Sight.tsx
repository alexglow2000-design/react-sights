import { useEffect, useState } from 'react'
import styles from './Sight.module.css'
import Button from '../components/Button/Button'
import { useNavigate, useParams } from 'react-router-dom'
import { getOne } from '../axios'
import type { ISight } from '../types/types'

const Sight = () => {

  const navigate = useNavigate()
  const { id } = useParams()

  const [sight, setSight] = useState<ISight | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchSight = async () => {
      try {
        setLoading(true)
        setError(null)
        if (!id) throw new Error('ID не указан')
        const sightData = await getOne(id)
        setSight(sightData)
      } catch (e) {
        setError('Ошибка при загрузке достопримечательности')
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchSight()
    }
  }, [id])

  if (loading) return <h1>Загрузка</h1>
  if (error) return <h1>Произошло ошибка</h1>

  return (

    <div className={styles.sightContaier}>
      <div className={styles.goBack} onClick={() => navigate('/')}>
        <div className={styles.backSVG}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M21 12L3 12M3 12L11.5 3.5M3 12L11.5 20.5" stroke="#eeeeee99" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <div>
          <p className={styles.textGoBack}>Главная</p>
        </div>
      </div>
      <div className={styles.firstContainer}>
        <img className={styles.blockImg} width={670} height={900} alt={sight?.title} src={'https://rostov-on-map-api.onrender.com/static/' + sight?.img} />
        <div className={styles.description}>
          <div className={styles.descriptionCenter}>
            <div>
              <h1 className={styles.title}>{sight?.title}</h1>
            </div>
            <div>
              <p className={styles.location}>{sight?.location}</p>
            </div>
            <div>
              <Button>К карте</Button>
            </div>
            <div >
              <p className={styles.text}>{sight?.description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.secondContainer}>
        <div className={styles.textDescription}>
          <p className={styles.text}>{sight?.description2}</p>
        </div>
        <div className={styles.rateContainer}>
          <div>
            <p className={styles.rateHeader}>Оценка по яндекс картам</p>
          </div>
          <div className={styles.rateBox}>
            <p className={styles.rate}>{sight?.rate}<span className={styles.maxRate}>/5</span></p>
          </div>
        </div>
        <div className={styles.placeObject}>
          <svg width="353" height="264" viewBox="0 0 353 264" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M140 26C140 39.8071 151.193 51 165 51H253C266.807 51 278 62.1929 278 76V92C278 105.807 289.193 117 303 117H391C404.807 117 416 128.193 416 142V239C416 252.807 404.807 264 391 264H294C280.193 264 269 252.807 269 239V207C269 193.193 257.807 182 244 182H140C126.193 182 115 170.807 115 157V125C115 111.193 103.807 100 90 100H25C11.1929 100 0 88.8071 0 75V25C0 11.1929 11.1929 0 25 0H115C128.807 0 140 11.1929 140 25V26Z" fill="#EEEEEE" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Sight
