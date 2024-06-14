import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import '../styles/Navbar.css';

function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('firstName'));

    const handleLogout = () => {
        localStorage.clear();
        setIsLoggedIn(false);
        window.location.href = '/';
    };

    return (
        <div className={"navbar"}>
            <div className={"nav-wrapper"}>
                <div className={"navelements"}>
                    <NavLink className={"element"} to={'/'}>Strona główna</NavLink>
                </div>
                <div className={"konto"}>
                    {isLoggedIn ? (
                        <div className={"navlogin"}>
                            <button className='wyloguj' onClick={handleLogout}>Wyloguj się</button>
                            <NavLink className='dodaj' to={'/dodaj'}>Dodaj buty</NavLink>
                        </div>

                    ) : (
                        <>
                            <div className={"navlogin"}>
                                <NavLink className='zaloguj' to={'/login'}>Zaloguj się</NavLink>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Navbar;