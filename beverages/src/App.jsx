import React from "react";
import Header from "./components/Header";
import Carousel from "./components/Pages/Homepage/Carousel";
import Purpose from "./components/Pages/Homepage/Purpose";
import MediumPage from "./components/Pages/MediumPage";
import Bigi from "./components/Pages/DrinksPage/Bigi";
import Zobo from "./components/Pages/DrinksPage/Zobo";
import Kunu from "./components/Pages/DrinksPage/Kunu";
import Fura from "./components/Pages/DrinksPage/Fura";
import Cart from "./components/Pages/CartPage.jsx/Cart";
import SignUp from "./components/Pages/AccountsPage/SignUp";
import Help from "./components/Pages/HelpPage/Help";
import SignIn from "./components/Pages/AccountsPage/SignIn";
import Reset from "./components/Pages/AccountsPage/Reset";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Reviews from "./components/Pages/Homepage/Reviews";
import Footer from "./components/Footer";
import "../src/App.css";

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Carousel />
                <Purpose />
                <Reviews />
              </>
            }
          />
          <Route path="/drinks" element={<MediumPage/>}/>
          <Route path="/bigi" element={<Bigi/>}/>
          <Route path="/zobo" element={<Zobo/>}/>
          <Route path="/kunu" element={<Kunu/>}/>
          <Route path="/fura" element={<Fura/>}/>
          <Route path="/help" element={<Help/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/signIn" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/reset" element={<Reset/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
