
import Title from "../title/Title"
import Image from "../images/Image"
import movies from '../../assets/json/movies_rnexgr.json'
import { v4 as uuidv4 } from 'uuid';

const Main = () => {
  return (
    <>
      <section>
        {movies.map((movie, key = uuidv4()) => {
          { console.log('movie:', movie); }
          { console.log('key:', key); }
          return (
            <>
              <Title title={movie.category} classTxt="category" />
              <div>
                <div class="caroussel">
                  <div>
                    <div class="slide">
                      {movie.images.map((image, key = uuidv4()) => {
                        { console.log('image:', image); }
                        { console.log('key:', key); }
                        return (
                          <article className="article">
                            <Image src={image} classImg="imgSlide" />
                          </article>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

            </>
          );
        })}
      </section>
    </>
  )
}

export default Main