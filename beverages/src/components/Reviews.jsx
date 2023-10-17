import React from "react";
import man from "../img/man.jpeg";
import woman from "../img/woman.jpeg";
import '../css/Reviews.css'
// import cum from "./"

export default function Reviews() {
  return (
    <div className="reviews">
        <div className="video">
            <video src='/video.mov' className="video-content" autoPlay muted loop></video>
        </div>
        
      <div className="stories">
        <h2>We make people genuinely happy</h2>
        <div className="story">
          <div className="story-shape">
            <img src={woman} alt="" />
            <figcaption>Iyabo Ojo</figcaption>
          </div>
          <div className="story-text">
            <h3>Naija's Beverages saved my event</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
              voluptatibus neque magnam! Quia enim quae, ipsum nam aspernatur,
            </p>
          </div>
        </div>

        <div className="story">
          <div className="story-shape">
            <img src={man} alt="" />
            <figcaption>Ahmed Musa</figcaption>
          </div>
          <div className="story-text">
            <h3>I don't even shop for drinks anymore</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
              voluptatibus neque magnam! Quia enim quae, ipsum nam aspernatur,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
