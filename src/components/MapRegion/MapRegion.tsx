import { useState } from 'react'
import styles from './MapRegiox.module.css'
import Pervomayskiy from '../../assets/map/Pervomayskiy.png'
import Oktybrsky from '../../assets/map/Oktybrsky.png'
import Proletarskiy from '../../assets/map/Proletarskiy.png'
import Sovetskiy from '../../assets/map/Sovetskiy.png'
import Jeleznodorojni from '../../assets/map/Jeleznodorojni.png'
import Leninskiy from '../../assets/map/Leninskiy.png'
import Kirovskiy from '../../assets/map/Kirovskiy.png'
import Voroshilovskiy from '../../assets/map/Voroshilovskiy.png'
import Place from '../../assets/map/Place.png'
import { useNavigate } from 'react-router-dom'

interface IRegion{
  name: string,
  src: string,
  className: string
}

const regions: IRegion[] = [
  { name: 'Первомайский', src: Pervomayskiy, className: 'pervomayskiy' },
  { name: 'Октябрьский', src: Oktybrsky, className: 'oktybrsky' },
  { name: 'Пролетарский', src: Proletarskiy, className: 'proletarskiy' },
  { name: 'Советский', src: Sovetskiy, className: 'sovetskiy' },
  { name: 'Железнодорожный', src: Jeleznodorojni, className: 'jeleznodorojni' },
  { name: 'Ленинский', src: Leninskiy, className: 'leninskiy' },
  { name: 'Кировский', src: Kirovskiy, className: 'kirovskiy' },
  { name: 'Ворошиловский', src: Voroshilovskiy, className: 'voroshilovskiy' },
]

const MapRegion = () => {
  const [hovered, setHovered] = useState<string | null>(null)
  const navigate = useNavigate()

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Прелести Ростова-на-Дону</h1>
      <div className={styles.placeMap}>
        <div className={styles.containerMap}>
          {regions.map((region) => (
            <div
              key={region.name}
              className={`${styles[region.className]} ${
                hovered && hovered !== region.name ? styles.inactive : ''
              } ${hovered === region.name ? styles.active : ''}`}
              onMouseEnter={() => setHovered(region.name)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => navigate(`/sights?location=${encodeURIComponent(region.name)}`)}
            >
              <img src={region.src} title={region.name} />
            </div>
          ))}
          <div className={styles.place}>
            <img src={Place} title="Заднее пространство" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MapRegion
