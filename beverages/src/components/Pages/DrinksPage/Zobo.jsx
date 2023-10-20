import React from 'react'
import zobo1 from '../../../img/zobo1.jpg'
import zobo2 from '../../../img/zobo2.jpg'
import zobo3 from '../../../img/zobo3.jpg'
import zobo5 from '../../../img/zobo5.jpg'
import zobo6 from '../../../img/zobo6.jpg'
import zobo7 from '../../../img/zobo6.jpeg'
import { BsTruck } from "react-icons/bs";
import { FaHandshakeSimple } from "react-icons/fa6";
import { PiHandshakeDuotone } from "react-icons/pi";


export default function Zobo() {
  return (
    <div className="drinks">
      <div className="column1">
        <div className="column1-left">
          <div className="main-drink">
            <img src={zobo6} alt="" />
          </div>
            <h5>You may also like</h5>
          <div className="small">
            <div className="smaller-drinks">
                <img src={zobo2} alt="" />
            </div>
            <div className="smaller-drinks">
            <img src={zobo3} alt="" />
            </div>
            <div className="smaller-drinks">
            <img src={zobo7} alt="" />
            </div>
            <div className="smaller-drinks">
            <img src={zobo1} alt="" />
            </div>
          </div>
        </div>
        <div className="column1-right">
          <h2>Zobo</h2>
          <p>
            Mouthwatering Perfection Starts With Originality In Taste. Zobo
            Is Our Local Beverage With The Popular Hibiscus Signature Taste. This
            Drink Has A Sure Refreshing Taste Like None Other.Impress With
            Style When You Refresh With Zobo!
          </p>
          <h4>Brand: Dovel</h4>
          {/* <hr /> */}
          <div className="price">
            <h3>&#8358; 400</h3>
            <h5>&#8358; 450</h5>
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
  )
}
