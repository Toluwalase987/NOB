import React, { useContext, useState, useRef, useEffect } from "react";
import "../../../css/SignUp.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/config";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { BsExclamationCircle } from "react-icons/bs";
import ProductsContext from "../../../context/products";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const userRef = useRef();
  const navigate = useNavigate();

  const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
  const PWD_REGEX =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%])[A-Za-z0-9!@#$%]{8,24}$/;

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(password));
    setValidMatch(password === confirmPassword);
  }, [password, confirmPassword, PWD_REGEX]);

  function signin() {
    navigate("/signIn");
  }

  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }
  function toggleShowPasswordVisibility() {
    setShowConfirmPassword(!showConfirmPassword);
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
          ref={userRef}
          required
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
          required
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <label htmlFor="">Email Address</label>
        <input
          type="email"
          placeholder="Enter Email Address"
          required
          autoComplete="off"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <div className="password-input">
          <label htmlFor="">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            required
            id="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            aria-invalid={validPwd ? "false" : "true"}
            aria-describedby="pwdnote"
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
          />
          <span
            className={`password-toggle ${showPassword ? "visible" : ""}`}
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>
        <p
          id="pwdnote"
          className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
        >
          <BsExclamationCircle />
          Must Contain<br/>
          8-24 Characters
          <br />
          Uppercase and Lowercase
          <br />
          Special Character (!@#$%)
          <br />
          A Number
          <br />
        </p>
        <div className="password-input">
          <label htmlFor="">Confirm Password</label>
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            required
            value={confirmPassword}
            aria-invalid={validMatch ? "false" : "true"}
            aria-describedby="confirmnote"
            onFocus={() => setMatchFocus(true)}
            onBlur={() => setMatchFocus(false)}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <span
            className={`password-toggle ${
              showConfirmPassword ? "visible" : ""
            }`}
            onClick={toggleShowPasswordVisibility}
          >
            {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>
          <p
          id="confirmnote"
          className={matchFocus && !validMatch ? "instructions" : "offscreen"}
        >
          <BsExclamationCircle/>
          Must match password.
        </p>
        <button disabled={isLoading && !validName || !validPwd || !validMatch ? true : false}>
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
