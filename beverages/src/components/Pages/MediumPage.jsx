import React, { useState, useEffect } from "react";
import "../../css/MediumPage.css";
import bigiImg from "../../img/Bigi2.jpg";
import kunuImg from "../../img/kunu5.png";
import furaImg from "../../img/fura5.png";
import zoboImg from "../../img/zobo6.jpeg";
import { Link, useNavigate } from "react-router-dom";

export default function MediumPage() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true); // Initialize loading state as true

  useEffect(() => {
    // An array of image URLs
    const imageUrls = [bigiImg, kunuImg, furaImg, zoboImg];

    const loadImages = async () => {
      // Create an array of image loading promises
      const imagePromises = imageUrls.map((imageUrl) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => resolve();
          img.src = imageUrl;
        });
      });

      // Wait for all image loading promises to resolve
      await Promise.all(imagePromises);

      // All images are loaded, set isLoading to false
      setIsLoading(false);
    };

    // Call the loadImages function to load images
    loadImages();
  }, []);

  function bigi() {
    const drinksRoute = "/bigi";
    navigate(drinksRoute);
  }

  function zobo() {
    const drinksRoute = "/zobo";
    navigate(drinksRoute);
  }
  function kunu() {
    const drinksRoute = "/kunu";
    navigate(drinksRoute);
  }
  function fura() {
    const drinksRoute = "/fura";
    navigate(drinksRoute);
  }

  return (
    <div className="medium-container">
      {isLoading && <div className="loading-spinner"></div>}
      <div className="medium">
        <h1>What we currently have</h1>
        <div className="items">
          <div className="item" onClick={bigi}>
            <div className="item-content">
              <img src={bigiImg} alt="Bigi Drinks" />
            </div>
            <h5>Bigi Drinks</h5>
          </div>
          <div className="item" onClick={kunu}>
            <div className="item-content">
              <img src={kunuImg} alt="Kunu" />
            </div>
            <h5>Kunu</h5>
          </div>
          <div className="item" onClick={fura}>
            <div className="item-content">
              <img src={furaImg} alt="Fura" />
            </div>
            <h5>Fura</h5>
          </div>
          <div className="item" onClick={zobo}>
            <div className="item-content">
              <img src={zoboImg} alt="Zobo" />
            </div>
            <h5>Zobo</h5>
          </div>
        </div>
        <h2>Select your preferred choice</h2>
      </div>
    </div>
  );
}
