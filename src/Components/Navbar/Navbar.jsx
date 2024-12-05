import React, { useState } from 'react'
import './Navbar.css'


import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'



export const Navbar = () => {
  const [menu, setMenu] = useState("shop")


  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='' />
        <p>SHOPPER</p>
      </div>
      <ul className='nav-menu'>
        <li className={menu === "shop" ? "active" : ""} onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: 'none', color: 'inherit' }} to='/'>Shop</Link>{menu === "shop" ? <hr className="animated-hr" /> : <hr className="hidden-hr" />}</li>
        <li className={menu === "men" ? "active" : ""} onClick={() => { setMenu("men") }}><Link style={{ textDecoration: 'none', color: 'inherit' }} to='/men'>Men</Link>{menu === "men" ? <hr className="animated-hr" /> : <hr className="hidden-hr" />}</li>
        <li className={menu === "women" ? "active" : ""} onClick={() => { setMenu("women") }}><Link style={{ textDecoration: 'none', color: 'inherit' }} to='/women'>Women</Link>{menu === "women" ? <hr className="animated-hr" /> : <hr className="hidden-hr" />}</li>
        <li className={menu === "kids" ? "active" : ""} onClick={() => { setMenu("kids") }}><Link style={{ textDecoration: 'none', color: 'inherit' }} to='/kids'>Kids</Link>{menu === "kids" ? <hr className="animated-hr" /> : <hr className="hidden-hr" />}</li>
      </ul>
      <div className="nav-login-cart">
        <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/login'><button>Login</button></Link>
        <Link style={{ textDecoration: 'none', color: 'inherit' }} to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">
          0
        </div>
      </div>
    </div>
  )
}
