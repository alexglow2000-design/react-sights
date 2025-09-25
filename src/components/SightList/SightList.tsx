import { memo, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import styles from './SightList.module.css'
import SightItem from '../SightItem/SightItem'
import { getAll } from '../../axios'
import type { ISight } from '../../types/types'
import Pages from '../Pages/Pages'

const SightList = memo(() => {

  const [searchParams] = useSearchParams()
  const initialLocation = searchParams.get('location') || 'Все'
  const [sights, setSights] = useState<ISight[]>([])
  const [pages, setPages] = useState(0)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [location, setLocation] = useState(initialLocation)
  const [showDropdown, setShowDropdown] = useState(false)
  const limit = 5
  const [currentPage, setCurrentPage] = useState(1)
  const locations = ['Все', 'Железнодорожный', 'Пролетарский', 'Советский', 'Кировский', 'Ленинский']
  

  const changePage = (number: number) => {
    console.log(number)
    setCurrentPage(number)
    console.log(number)
  }

  useEffect(() => {
    const fetchSights = async () => {
      try {
        setLoading(true)
        setError(null)
        let sightsData;
        if(location !== 'Все'){
          sightsData = await getAll(location, limit, currentPage)
        } else {
          sightsData = await getAll()
        }
        setSights(sightsData.rows)
        setPages(sightsData.count)
      } catch (err: any) {
        setError(err.message || 'Ошибка при загрузке списка достопримечательностей')
      } finally {
        setLoading(false)
      }
    }

    fetchSights()
  }, [currentPage, location])

  if (loading) return <div>Загрузка списка достопримечательностей...</div>
  if (error) return <div>Ошибка: {error}</div>

  return (
    <div className={styles.sightContaier}>
      <div className={styles.header}>
        <div className="">
          <p className={styles.textHeader}>Культурные объекты</p>
        </div>
        <div className="">
          <p className={styles.textHeader}>Оценка</p>
        </div>
        <div className="">
          <p className={styles.textHeader}>Район</p>
        </div>
        <div className={styles.iconWrapper} onClick={() => setShowDropdown((prev) => !prev)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="31" height="23" viewBox="0 0 31 23" fill="none">
            <path d="M2.5 1.75H28.5M12.25 11.5H28.5M22 21.25H28.5" stroke="#EEEEEE" stroke-width="3.25" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          {showDropdown && (
            <div className={styles.dropDownContainer}>
              <ul className={styles.dropDownList}>
                {locations.map((city) => (
                  <li
                    key={city}
                    className={styles.dropDownItem}
                    onClick={() => {
                      setLocation(city)
                      setShowDropdown(false)
                    }}
                  >
                    {city}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className={styles.sightList}>
        {sights && sights.map((i) => (
          <SightItem key={i.sight_id} id={i.sight_id} title={i.title} img={i.img} location={i.location} rate={i.rate} />
        ))}
      </div>
      <div className={styles.footer}>
        <Pages count={pages} limit={limit} changePage={changePage} currentPage={currentPage} />
      </div>
    </div>
  )
})

export default SightList
