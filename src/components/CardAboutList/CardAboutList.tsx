import { type FC } from 'react'
import CardAbout from '../CardAbout/CardAbout'
import styles from './CardAboutList.module.css'

interface ICardAbout{
  id: number,
  title: string,
  img: string
}

interface ICardAboutListProps{
    cardAboutList: ICardAbout[]
}

const CardAboutList: FC<ICardAboutListProps> = ({cardAboutList}) => {
  return (
    <div className={styles.container}>
      {cardAboutList.map((i) => (
        <>
        <CardAbout key={i.id} id={i.id} title={i.title} img={i.img}/>
        </>
      ))}
    </div>
  )
}

export default CardAboutList
