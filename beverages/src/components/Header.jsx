import React from "react";
import "../css/Header.css";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { RxPerson } from 'react-icons/rx';
import { BsSearch } from 'react-icons/bs';
import { Link,useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate()

  function cart(){
    const cartRoute = '/cart'
    navigate(cartRoute)
  }
  function signIn(){
    navigate('/signIn')
  }
  return (
    <div className="header">
      <nav> 
        <div className="nav-start">
          <h4>Naija's Beverages</h4>
          <div className="links">
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/drinks">Drinks</Link>
            {/* <a className="link" href="#">Info</a> */}
            <Link className="link" to="/help">Help</Link>
          </div>
        </div>
        <div className="nav-end">
          <div className="search">
            <input type="text" placeholder="Search Beverages" />
            <button className="search-icon"><BsSearch/></button>
          </div>
          <div className="account-somn">
            <button className="btn-account"><RxPerson/>Account</button> 
            <div className="dropdown">
              <button onClick={signIn}>Sign In</button>
            </div>
          </div>
          <button className="btn" onClick={cart}><AiOutlineShoppingCart/>Cart</button>
        </div>
      </nav>
    </div>
  );
}
