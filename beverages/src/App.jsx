import React from 'react'
import Header from './components/Header'
import Carousel from './components/Carousel'
import Purpose from './components/Purpose'
import Reviews from './components/Reviews'
import '../src/App.css'

export default function App() {
  return (
    <div>
      <Header/>
      <Carousel/>
      <Purpose/>
      <Reviews/>
    </div>
  )
}
