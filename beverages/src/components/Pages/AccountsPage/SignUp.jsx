import React, { useContext, useState } from "react";
import "../../../css/SignUp.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/config";
import ProductsContext from "../../../context/products";

export default function SignUp() {
  const { firstName, setFirstName } = useContext(ProductsContext);
  // const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  function signin() {
    navigate("/signIn");
  }

  function registerUser(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Password does not match");
    }
    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        user.updateProfile({
          displayName: firstName,
        })
        
        setFirstName(user.displayName);
        setIsLoading(false);
        toast.success("Account created succesfully 😄");
        navigate("/signIn");
      })
      .catch((error) => {
        toast.error("Something went wrong, please try again.");
        setIsLoading(false);
      });
  }

  return (
    <div className="signup">
      <ToastContainer />
      <h2>Create An Account</h2>
      <form action="" className="signup-form" onSubmit={registerUser}>
        <label htmlFor="">First Name</label>
        <input
          type="text"
          placeholder="Enter First Name"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <label htmlFor="">Last Name</label>
        <input
          type="text"
          placeholder="Enter Last Name"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
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
        <label htmlFor="">Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        />
        <button disabled={isLoading}>
          {isLoading ? (
            <div className="spinning-loader"></div>
          ) : (
            "Create An Account"
          )}
        </button>
      </form>
      <div className="already">
        <p>Already have an Account?</p>
        <button onClick={signin}>Login</button>
      </div>
    </div>
  );
}
