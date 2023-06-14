import React from 'react'
import "../styles/header.css"
import {FiUser } from "react-icons/fi"
import {FaShoppingCart } from "react-icons/fa"


const Header = () => {
  return (
    <nav>
       <h2>STORE</h2>

       <div>
        <a href="#home">HOME</a>
        <a href="#featured">FEATURED</a>
        <a href="#carousel">ALL PRODUCTS</a>
        <a href="#contact">CONTACT US</a>
        <a href="#home"><FaShoppingCart /></a>
        <a href="#home"><FiUser /></a>
     
       </div>
    </nav>
  )
}

export default Header