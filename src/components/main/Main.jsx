
import movies from '../../assets/json/movies_rnexgr.json'
import { v4 as uuidv4 } from 'uuid';
import Section from '../section/Section'

const Main = () => {
  return (
    <>
      <main>
        {movies.map((movie, key = uuidv4()) => {
          { console.log('movie:', movie); }
          { console.log('key:', key); }
          return (
            <>
              <Section movie={movie} />
            </>
          );
        })}
      </main>
    </>
  )
}

export default Main