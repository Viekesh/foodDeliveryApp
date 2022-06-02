import React from 'react'
import { NavLink } from 'react-router-dom';

const MenuContainer = ({ link, icon, isHome }) => {

    return (
        <li className={isHome ? `active` : ``}>
            <NavLink to={link}>
                <span className="icon">{icon}</span>
            </NavLink>
        </li>
    )
}

export default MenuContainer;