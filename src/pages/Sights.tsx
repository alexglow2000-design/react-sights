import Banner from '../components/Banner/Banner'
import SightList from '../components/SightList/SightList'
import Rectangle from '../assets/img/Rectangle 4-3.jpg'

const Sights = () => {

  return (
    <>
      <Banner
        size='sm'
        img={Rectangle}
        withButton={false}
        title='Открой Ростов по новому'
        description=''
      />
      <SightList />
    </>
  )
}

export default Sights
