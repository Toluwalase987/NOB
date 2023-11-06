import React from 'react'
import '../../../css/Carousel.css'
import Carousel from "react-bootstrap/Carousel";
import { Link } from 'react-router-dom';
import Zobo from "../../../img/Zobo4.jpg";
import Fura from "../../../img/Fura3.jpg";
import Bigi from "../../../img/Bigi2.jpg";

export default function Carousels() { 

  return (
    <div>
      <Carousel className="carousel-image">
        <Carousel.Item className='carousel-body'>
          <img className='image' src={Zobo} alt="" />
          <Carousel.Caption className='caption1'>
            <h3>Savour the refreshing and exquisite taste of Naija's finest beverages, best on the planet.</h3>
            <h4>None other comes close.</h4>
            <Link to='/drinks'><button>Begin shopping <span className='btn-carousel'>&rarr;</span></button></Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carousel-body'>
          <img className='image' src={Fura} alt="" />
          <Carousel.Caption className='caption3'>
          <h3>We scale and move through the urban and rural environs of Nigeria to discover the best.</h3>
          <h4>Bringing them a step closer to you.</h4>
          <Link to='/drinks'><button>Begin shopping <span className='btn-carousel'>&rarr;</span></button></Link>
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
          <Link to='/drinks'><button>Begin shopping <span className='btn-carousel'>&rarr;</span></button></Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
