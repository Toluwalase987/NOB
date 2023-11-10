import React, { useContext, useEffect, useState } from "react";
import "../../../css/SignIn.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/config";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import ProductsContext from "../../../context/products";

export default function SignIn() {
  const navigate = useNavigate()
  const {loginUser, firstName} = useContext(ProductsContext)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

 const handleLogin = async (e)=>{
  e.preventDefault()
  setIsLoading(true)

  try {
    await loginUser(email, password)
    toast.success("Signed In")
    navigate("/")
  } catch (error) {
    toast.error("Wrong Information Provided. Please Retry.")
    setIsLoading(false)
  }
 }
 useEffect(()=>{
  console.log(firstName);
 }, [])

  return (
    <div className="sign-in">
      <ToastContainer />
      <h2>Sign In</h2>
      <form action="" className="signIn-form" onSubmit={handleLogin}>
        <label htmlFor="">Email Address</label>
        <input
          type="email"
          placeholder="Enter Email Address"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="">Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Link to="/reset" className="reset-link">
          Forgot Password?
        </Link>
        <button disabled={isLoading}>
          {isLoading ? <div className="spinning-loader"></div> : "Login"}
        </button>
        <h6>OR</h6>
        <div className="google">
          <p>
            <FcGoogle />
            Login with Google
          </p>
        </div>
      </form>
      <Link to="/signup" className="signin-link">
        Don't have an account? Sign Up
      </Link>
    </div>
  );
}
