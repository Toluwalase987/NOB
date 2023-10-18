import React from 'react'
import '../css/Carousel.css'
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from 'react-router-dom';
import Zobo from "../img/Zobo4.jpg";
// import Kunu from "../img/kunu1.webp";
import Fura from "../img/Fura3.jpg";
import Bigi from "../img/Bigi2.jpg";

export default function Carousels() { 
  // const navigate = useNavigate();
  return (
    <div>
      <Carousel className="carousel-image">
        <Carousel.Item className='carousel-body'>
          <img className='image' src={Zobo} alt="" />
          <Carousel.Caption className='caption1'>
            <h3>Savour the refreshing and exquisite taste of Naija's finest beverages, best on the planet.</h3>
            <h4>None other comes close.</h4>
            <button>Begin shopping &rarr;</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carousel-body'>
          <img className='image' src={Fura} alt="" />
          <Carousel.Caption className='caption3'>
          <h3>We scale and move through the urban and rural environs of Nigeria to discover the best.</h3>
          <h4>Bringing them a step closer to you.</h4>
          <button>Begin shopping &rarr;</button>
          </Carousel.Caption>
        </Carousel.Item>
        {/* <Carousel.Item className='carousel-body'>
          <img className='image' src={Kunu} alt="" />
          <Carousel.Caption className='caption2'>
          <h3>We scale and move through the urban and rural environs of Nigeria to discover the best.</h3>
          <h3>Bringing them a step closer to you.</h3>
          </Carousel.Caption>
        </Carousel.Item> */}
        <Carousel.Item  className='carousel-body'>
          <img className='image' src={Bigi} alt="" />
          <Carousel.Caption className='caption4'>
          <h3>We support and distribute products made in Nigeria, from carbonated drinks to fruit juices.</h3>
          <h4>Enjoyment go wan kee you.</h4>
          <button>Begin shopping &rarr;</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
