import React, { useContext, useEffect, useState } from "react";
import "../css/Header.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RxPerson } from "react-icons/rx";
import { BsSearch } from "react-icons/bs";
import { BsPersonFillCheck } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { auth } from "../firebase/config";
import "react-toastify/dist/ReactToastify.css";
import {useDispatch} from "react-redux"
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from "./redux/slice/authSlice";


export default function Header({username, setUsername}) {
  const dispatch = useDispatch()
  const [isSignedIn, setIsSignedIn] = useState();
  const navigate = useNavigate();


  function cart() {
    const cartRoute = "/cart";
    navigate(cartRoute);
  }
  function signIn() {
    navigate("/signIn");
  }

  function logoutUser() {
    signOut(auth)
      .then(() => {
        toast.success("Signed Out")
        navigate("/");
      })
      .catch((error) => {
        toast.error("Sign Out Failed");
      });
  }

  // Monitor signed in user
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log(user);
        const uid = user.uid;
        if(user.displayName == null){
            const u1 = user.email.substring(0, user.email.indexOf("@"))
            const u1WithoutNumbers = u1.replace(/\d+/g, '');
            const uName = u1WithoutNumbers.charAt(0).toUpperCase() + u1.slice(1)
            // console.log(uName);
            setUsername(uName)
        }else{
          setUsername(user.displayName)
        }

        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            username: user.displayName ? user.displayName : username,
            userId: user.uid
          })
        )
        setIsSignedIn(false)
        
      } else {
        setUsername("")
        dispatch(
          REMOVE_ACTIVE_USER()
        )
        setIsSignedIn(true)
      }
    });
  }, [])

  useEffect(()=>{
    
  }, [])

  return (
    <div className="header">
      <ToastContainer />
      <nav>
        <div className="nav-start">
          <h4>Naija's Beverages</h4>
          <div className="links">
            <Link className="link" to="/">
              Home
            </Link>
            <Link className="link" to="/drinks">
              Drinks
            </Link>
            {/* <a className="link" href="#">Info</a> */}
            <Link className="link" to="/help">
              Help
            </Link>
          </div>
        </div>
        <div className="nav-end">
          <div className="search">
            <input type="text" placeholder="Search Beverages" />
            <button className="search-icon">
              <BsSearch />
            </button>
          </div>
          <div className="account-somn">
            {isSignedIn ? (
              <button className="btn-account">
                <RxPerson />
                Account
              </button>
            ) : (
              <button className="btn-account">
                <BsPersonFillCheck />
                Hi, {username}
              </button>
            )}
            <div className="dropdown">
              {isSignedIn ? (
                <button onClick={signIn}>Sign In</button>
              ) : (
                <button onClick={logoutUser}>Log Out</button>
              )}
            </div>
          </div>
          <div className="carty">
            <button className="btn" onClick={cart}>
              <AiOutlineShoppingCart />
              Cart
            </button>
            <span>7</span>
          </div>
        </div>
      </nav>
    </div>
  );
}
