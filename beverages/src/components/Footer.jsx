import React from 'react'
import { FaTwitterSquare } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { BsLinkedin } from 'react-icons/bs';


export default function Footer() {
  return (
    <div>
      <h2>Naija's Beverages</h2>
      <p>Built by Toluwalase</p>
      <FaTwitterSquare/>
      <SiGmail/>
      <BsLinkedin/>
      <p>.Copyright &copy; by Toluwalase </p>
    </div>
  )
}
