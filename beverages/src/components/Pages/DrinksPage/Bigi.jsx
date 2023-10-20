import React from "react";
import "../../../css/Drinks.css";
import bigicola from "../../../img/bigicola1.png";
import bigiapple from "../../../img/bigiapple.png";
import bigilemon from "../../../img/bigilemon2.png";
import bigiginger from "../../../img/bigiginger.png";
import bigichapman from "../../../img/bigichapman.png";
import bigitropical from "../../../img/bigitropical.png";
import { BsTruck } from "react-icons/bs";
import { FaHandshakeSimple } from "react-icons/fa6"; 
import { PiHandshakeDuotone } from "react-icons/pi";


export default function Bigi() {
  return (
    <div className="drinks">
      <div className="column1">
        <div className="column1-left">
          <div className="main-drink">
            <img src={bigicola} alt="" />
          </div>
          <h5>You may also like</h5>
          <div className="small">
            <div className="smaller-drinks">
              <img src={bigiapple} alt="" />
            </div>
            <div className="smaller-drinks">
              <img src={bigitropical} alt="" />
            </div>
            <div className="smaller-drinks">
              <img src={bigilemon} alt="" />
            </div>
            <div className="smaller-drinks">
              <img src={bigiginger} alt="" />
            </div>
          </div>
        </div>
        <div className="column1-right">
          <h2>Bigi Cola</h2>
          <p>
            Mouthwatering Perfection Starts With Originality In Taste. Bigi Cola
            Is Our Carbonated Drink With The Popular Cola Signature Taste. This
            Cola Drink Has A Sure Refreshing Taste Like None Other.Impress With
            Style When You Refresh With Mr. Cool!
          </p>
          <h4>Brand: Bigi</h4>
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
  );
}
