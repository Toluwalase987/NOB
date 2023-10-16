import React from "react";
import "../css/Header.css";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { RxPerson } from 'react-icons/rx';
import { BsSearch } from 'react-icons/bs';

export default function Header() {
  return (
    <div className="header">
      <nav>
        <div className="nav-start">
          <h4>Naija's Beverages</h4>
          <div className="links">
            <a className="link" href="#">Home</a>
            <a className="link" href="#">Drinks</a>
            <a className="link" href="#">Info</a>
            <a className="link" href="#">Help</a>
          </div>
        </div>
        <div className="nav-end">
          <div className="search">
            <input type="text" placeholder="Search Beverages" />
            <button className="search-icon"><BsSearch/></button>
          </div>
          <button className="btn"><RxPerson/>Account</button>
          <button className="btn"><AiOutlineShoppingCart/>Cart</button>
        </div>
      </nav>
    </div>
  );
}
