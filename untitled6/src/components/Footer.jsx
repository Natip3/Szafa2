import { NavLink } from 'react-router-dom';
//import React, { useState } from 'react';
import '../styles/Footer.css';
import Buty from "../pages/Buty.jsx";

function Footer() {


    //const handleLogout = () => {
        //localStorage.clear();
        //window.location.href = '/';
    //};

    return (
        <div className={"footer"}>
            <div className={"fot-wrapper"}>
                <div className={"szafa"}>
                    <NavLink className='Szafa' to={'/szafa'}>Przeglądaj</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Footer;