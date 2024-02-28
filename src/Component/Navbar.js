import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav>
        <div className="nav_box">
            <span className="my_shop">My shopping</span>
            <div className="cart">
                <span>☼</span>
                <span>1</span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar