import {React, useState, useEffect} from "react";
import "../../../css/Drinks.css";
import fura1 from "../../../img/fura6.jpeg";
import fura2 from "../../../img/fura5.jpeg";
import fura3 from "../../../img/fura5.png";
import fura4 from "../../../img/fura7.png";
import fura5 from "../../../img/fura8.jpg";
import { BsTruck } from "react-icons/bs";
import { FaHandshakeSimple } from "react-icons/fa6";
import { PiHandshakeDuotone } from "react-icons/pi"; 


export default function Fura() {
  const [isLoading, setIsLoading] = useState(true); // Initialize loading state as true

  useEffect(() => {
    // An array of image URLs
    const imageUrls = [fura1, fura2, fura3, fura4, fura5];

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

  return (
    <div className="medium-container">
      {isLoading ? (<div className="loading-spinner"></div>) : (
        <div className="drinks">
        <div className="column1">
          <div className="column1-left">
            <div className="main-drink">
              <img src={fura4} alt="" />
            </div>
            <h5>You may also like</h5>
            <div className="small">
              <div className="smaller-drinks">
                <img src={fura2} alt="" />
              </div>
              <div className="smaller-drinks">
                <img src={fura3} alt="" />
              </div>
              <div className="smaller-drinks">
                <img src={fura1} alt="" />
              </div>
              <div className="smaller-drinks">
                <img src={fura5} alt="" />
              </div>
            </div>
          </div>
          <div className="column1-right">
            <h2>Fura Da Nono</h2>
            <p>
              Mouthwatering Perfection Starts With Originality In Taste. Fura
              Is Our Traditional Beverage With The Popular Yoghurt Signature Taste. This
              Drink Has A Sure Refreshing Taste Like None Other.Impress With
              Style When You Refresh With Fura Da Nono!
            </p>
            <h4>Brand: Naija's Beverages</h4>
            {/* <hr /> */}
            <div className="price">
              <h3>&#8358; 500</h3>
              <h5>&#8358; 550</h5>
              <h6>-33%</h6>
            </div>
            <button>Add to cart</button>
          </div>
        </div>
        <div className="column2">
          <h5>Delivery & returns</h5>
          <h6>Choose your location</h6>
          <div className="state"></div>
          <div className="area"></div>
          <div className="delivery-details">
            <div className="delivery-icon">
              <BsTruck className="icon"/>
            </div>
            <div className="delivery-text">
              <h6>Door Delivery</h6>
              <p>Delivery Fees &#8358; 500</p>
              <p>
                Ready for delivery between 24 October & 25 October when you order
                within next 5hrs 12mins.
              </p>
            </div>
          </div>
          <div className="delivery-details">
            <div className="delivery-icon">
              <PiHandshakeDuotone className="icon"/>
            </div>
            <div className="delivery-text">
              <h6>Pickup Station</h6>
              <p>Delivery Fees &#8358; 250</p>
              <p>
                Arriving at pickup station between 24 October & 25 October when
                you order within next 5hrs 12mins.
              </p>
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}
