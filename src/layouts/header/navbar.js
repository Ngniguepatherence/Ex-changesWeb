import React from "react";
import { NavLink } from "react-router-dom";
import  './nav.css'

function Navbar(){
    return(
        <nav>
            <logo> img</logo>
            <di>
                <NavLink to="/apropos" className="styleLink"> A propos</NavLink>
                <NavLink to={'/signup'} className={'btn_sign'}>Inscription</NavLink>
                <NavLink to={'/signin'} className={'btn_sign'}>Connexion</NavLink>
           </di>
        </nav>
    )
}

export default Navbar;