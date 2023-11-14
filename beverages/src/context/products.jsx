import { createContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ProductsContext = createContext();

function Provider({ children, onLogin }) {
    
  const [results, setResults] = useState([]);
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const fetchProducts = async () => {
    const response = await fetch("http://localhost:3001/categories");
    const data = await response.json();
    console.log(data);
    setResults(data);
  };

  function loginUser() {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setIsLoading(false);
        navigate("/");
      })
      .catch((error) => {
        console.error('Error signing in:', error);
        setIsLoading(false);
      });
  }

  // function logoutUser(){
  //   signOut(auth)
  //     .then(() => {
  //       setIsSignedIn(false)
  //     })
  //     .catch((error) => {
  //       toast.error("Sign Out Failed");
  //     });
  // }

  const valueToShare = {
    fetchProducts,
    results,
    loginUser,
    isSignedIn,
    firstName,
    setFirstName,
    isLoading,
    setEmail,
    setPassword,
    setIsSignedIn,
    email,
    password,
  };

  return (
      <ProductsContext.Provider value={valueToShare}>
        {children}
      </ProductsContext.Provider>
  );
}
export { Provider };
export default ProductsContext;
