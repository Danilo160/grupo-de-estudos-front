import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
//import { GiBookAura } from "react-icons/gi";
//import {CgProfile} from "react-icons/cg";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { NavLink } from "react-router-dom";
const userPhoto = window.localStorage.getItem("foto")
const userName = window.localStorage.getItem("nome")

function Navbar() {

  const [text, setText] = useState("")

  useEffect(() => {
    var hora = new Date().getHours()

    if (hora >= 0 && hora < 12) {
       setText(`Bom dia, ${userName.split(' ')[0]}!`)
    } else if (hora >= 12 && hora < 18) {
       setText(`Boa tarde, ${userName.split(' ')[0]}!`)
    } else {
       setText(`Boa noite, ${userName.split(' ')[0]}!`)
    }
  }, []);

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  const noProfile = "https://cdn-icons-png.flaticon.com/512/3177/3177440.png"

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
        
          <div className="navbar-container container">
            <Link to="/profile" className="navbar-logo" onClick={closeMobileMenu}>
            
            {userPhoto===null||userPhoto===""?<img src={noProfile} style={{opacity: 0.5}} alt="Meu perfil" title="Meu perfil" className="imageLabelNav"/>:
              <img src={"data:image/png;base64,"+userPhoto} alt="Meu perfil" title="Meu perfil" className="imageLabelNav"/>} 
              <p className="titleNav">{text}</p>
            </Link>

            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Meu Perfil
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/my_groups"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Meus Grupos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/search_groups"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Buscar Grupos
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;