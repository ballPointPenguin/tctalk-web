import React from 'react'
import { Link } from 'gatsby'

const Header = () => (
  <header>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/privacy">Privacy</Link>
      <Link to="/tos">Terms</Link>
      <Link to="/login">Log In</Link>
    </nav>
  </header>
)

export default Header
