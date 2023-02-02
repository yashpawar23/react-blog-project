import React  from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import Home from '../Pages/Home'
import Bollywood from '../Pages/Bollywood'
import Technoloogy from '../Pages/Technoloogy'
import Hollywood from '../Pages/Hollywood'
import Fitness from '../Pages/Fitness'
import Food from '../Pages/Food'
const NavBar = () => {
  return (
    <>
    <div className='container-header'>
        <p>The</p>
        <h1>Siren</h1>
    </div>
    <div className='header-content'>
        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/bollywood'>Bollywood</Link></li>
            <li><Link to='/technology'>Technology</Link></li>
            <li><Link to='/hollywood'>Hollywood</Link></li>
            <li><Link to='./fitness'>Fitness</Link></li>
            <li><Link to='./food'>Food</Link></li>
            </ul>
        </div>
        </>
  )
}

export default NavBar