import React from 'react'
import {Link} from 'react-router-dom'
import user from "../../assets/user.png"
import "./Header.scss"
function Header() {
  return (
    <div className='header'>
      <Link to="/">
        <div className="logo">
          MOVIE APP
        </div>
      </Link>
        <div className="user_image">
          <img src={user} alt="" />
        </div>
    </div>
  )
}

export default Header