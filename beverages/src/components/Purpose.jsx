import React from "react";
import deliver from "../img/deliver2.jpeg";
import '../css/Purpose.css'

export default function Purpose() {
  return (
    <div className="purpose">
      <img src={deliver} alt="" />
      <div className="purpose-text">
        <h3>What we do</h3>
        <p>
          Naija's Beverages receives products from <span className="span">Nigeria's finest
          manufacturers wey sabi</span> and delivers them to your doorstep in any
          location.
        </p>

        <ul className="list">
            <li>We find the best manufacturers in the country</li>
            <li>Receive their finest beverages at agreeable rates</li>
            <li>Distribute and deliver them to customers at fair prices</li>
        </ul>
      </div>
    </div>
  );
}
