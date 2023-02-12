import css from './Slider.module.css'
import { topOfBest } from '../../data/Mejores';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export const SliderTop = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className={css.sContainer}>
      <div className={css.tittle}><h1>Noticias</h1></div>
      <Slider {...settings}>
      {topOfBest.map((item) =>(
          <div className={css.card} key={item.id}>
            <div className={css.cardImg}>
              <img src={item.img} alt={item.detail} />
              <h1>{item.name}</h1>
            </div>

            <div className={css.cardInfo}>
              <h3>{item.detail}</h3>
              <p>{item.top}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
);
}