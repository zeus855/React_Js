import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>
        <NavLink className={({ isActive }) => ( isActive ? "nav_active" : "")} to="/"
        >
        Accueil
        </NavLink>

        
        <NavLink className={({ isActive }) => ( isActive ? "nav_active" : "")} to="/News">
        

          News  
        </NavLink>

        <NavLink className={({ isActive }) => ( isActive ? "nav_active" : "")} to="/About">
        

          About  
        </NavLink>
            
            
        </div>
    );
};

export default Navigation;