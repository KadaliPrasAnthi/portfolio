import {useState} from 'react'
import { IconMenu } from '../Icons'
import './index.css'
const Navbar=()=>{
  const [open, setOpen] = useState(false);
  return (
    <>
    <nav className="desktop-navbar">
      <h1 className='portfolio-logo-title'>Prasanthi.dev</h1>
      <ul className='navbar-ul'>
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#achievements">Achievements</a></li> 
      </ul>
    </nav>


    <nav className="mobile-navbar">
      <h1 className='portfolio-logo-title'>Prasanthi.dev</h1>
      <div className="menu-icon" onClick={() => setOpen(!open)}>
        <IconMenu />
      </div>
      {/* Links */}
      <ul className={open ? "nav-links active" : "nav-links"}>
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#achievements">Achievements</a></li>
      </ul>
    </nav>  
    </>
  )
}
export default Navbar