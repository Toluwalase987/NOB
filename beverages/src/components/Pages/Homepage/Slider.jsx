import React from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import sliderData from "./SliderData";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../../../css/Carousel.css'

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length
  const autoScroll = true
  let slideInterval;
  let intervalTime = 5000

  const nextSlide = () =>{
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
  }
  const prevSlide = () =>{
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1)
  }

  //Slider begins at first slide on refresh
  useEffect(() => {
    setCurrentSlide(0)
  }, [])

  const auto = () => {
    slideInterval = setInterval(nextSlide, intervalTime)
  }
  //Auto Scroll
  useEffect(()=>{
    if(autoScroll){
        auto()
    }
    return () => {
        clearInterval(slideInterval)
    }
  },[currentSlide])
  

  return (
    <div className="slider">
      <div className="arrows">
        <FaArrowAltCircleLeft onClick={prevSlide} />
        <FaArrowAltCircleRight onClick={nextSlide} />
      </div>

      {sliderData.map((slide, index) => {
        const { image, caption, link } = slide;
        return (
          <div
            key={slide.id}
            className={index === currentSlide ? 'slide current' : 'slide'}
          >
            {index === currentSlide && (
              <div className="slides">
                <div className="slider-img">
                  <img src={image} alt="Slide" />
                </div>
                <div className={` ${index === 0 ? 'caption1' : index === 1 ? 'caption3' : 'caption4'}`}>
                  <h3>{caption.heading}</h3>
                  <h4>{caption.subheading}</h4>
                  <Link to={link.url}><button>{link.text} <span className='btn-carousel'>&rarr;</span></button></Link>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
