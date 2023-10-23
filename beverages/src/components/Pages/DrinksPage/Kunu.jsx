import {React, useState, useEffect} from "react";
import kunu1 from "../../../img/kunu6.jpg";
import kunu2 from "../../../img/kunu3.jpg";
import kunu4 from "../../../img/kunu5.jpg";
import kunu5 from "../../../img/kunu8.jpeg";
import kunu6 from "../../../img/kunu7.webp";
import { BsTruck } from "react-icons/bs";
import { FaHandshakeSimple } from "react-icons/fa6";
import { PiHandshakeDuotone } from "react-icons/pi";

export default function Kunu() {
  const [isLoading, setIsLoading] = useState(true); // Initialize loading state as true

  useEffect(() => {
    // An array of image URLs
    const imageUrls = [kunu1, kunu2, kunu4, kunu5, kunu6];

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
              <img src={kunu6} alt="" />
            </div>
            <h5>You may also like</h5>
            <div className="small">
              <div className="smaller-drinks">
                <img src={kunu2} alt="" />
              </div>
              <div className="smaller-drinks">
                <img src={kunu1} alt="" />
              </div>
              <div className="smaller-drinks">
                <img src={kunu5} alt="" />
              </div>
              <div className="smaller-drinks">
                <img src={kunu4} alt="" />
              </div>
            </div>
          </div>
          <div className="column1-right">
            <h2>Kunun Zaki</h2>
            <p>
              Mouthwatering Perfection Starts With Originality In Taste. Kunun Zaki
              Is Our Northern Local Drink With The Popular Millet Signature Taste. This
              Beverage Has A Sure Refreshing Taste Like None Other.Impress With
              Style When You Refresh With Kunun Zaki!
            </p>
            <h4>Brand: Naija's Beverages</h4>
            {/* <hr /> */}
            <div className="price">
              <h3>&#8358; 200</h3>
              <h5>&#8358; 150</h5>
              <h6>+33%</h6>
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
              <BsTruck className="icon" />
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
              <PiHandshakeDuotone className="icon" />
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
