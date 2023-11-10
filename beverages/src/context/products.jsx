import { createContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ProductsContext = createContext();

function Provider({ children, onLogin }) {
    
  const [results, setResults] = useState([]);
  const [isSignedIn, setIsSignedIn] = useState(false);
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
    setIsSignedIn(false);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setFirstName(firstName)
        console.log('Successfully signed in:', user);
        setIsLoading(false);
        setIsSignedIn(true);
        navigate("/");
      })
      .catch((error) => {
        console.error('Error signing in:', error);
        setIsLoading(false);
      });
  }

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
    email,
    password
  };

  return (
      <ProductsContext.Provider value={valueToShare}>
        {children}
      </ProductsContext.Provider>
  );
}
export { Provider };
export default ProductsContext;
