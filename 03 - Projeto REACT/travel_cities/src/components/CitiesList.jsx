import {useSelector} from 'react-redux'
import Cities from './Cities';

export default function CitiesList() {


  const cities = useSelector( state => state.cities );

  return (
    <section className='grid'>
      {
        cities.map( city => (
          <Cities 
            key={city.id}
            city = {city}
          />
        ))
      }
    </section>
  )
}
