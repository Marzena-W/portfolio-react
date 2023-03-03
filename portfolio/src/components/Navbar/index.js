import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                <a href="/" clasName="logo">Maggie Wilk</a>
            </Link>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/" end
                            className={({ isActive }) =>
                                isActive ? 'nav-link active' : 'nav-link'}> About
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/projects" end
                            className={({ isActive }) =>
                                isActive ? 'nav-link active' : 'nav-link'}> Projects
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/contact" end
                            className={({ isActive }) =>
                                isActive ? 'nav-link active' : 'nav-link'}> Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;