import Title from "../title/Title"
import Image from "../images/Image"

const Section = (props) => {
  const { movie } = props;
  return (
    <>
      <div className="wrapperMain">
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
      </div>
    </>
  )
}

export default Section