import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {home_slider} from '../utils/data'
import Slider from 'react-slick'

const Hero = () => {

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
}


  return (
    <HeroWrapper className='bg-white'>
      <Slider {...settings} className='container'>
        {home_slider.map((item, index) => (
          <div key={index} className="slide">
            <img src={item.img} alt={item.title} />
            <div className="content">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </HeroWrapper>
  )
}

const HeroWrapper = styled.div`
  overflow: hidden;
  margin-top: 30px;
  height: 300px;

   .slide {
    position: relative;
    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
      margin: 0 auto;
    }

    .content {
      position: absolute;
      top: 50%;
      left: 35%;
      transform: translate(-50%, -50%);
      background-color: rgba(255, 255, 255, 0.8);
      padding: 20px;
      text-align: center;
      max-width: 400px;
      width: 100%;

      h1 {
        font-size: 24px;
        margin-bottom: 10px;
      }

      p {
        font-size: 14px;
      }
    }
  }
`;

export default Hero