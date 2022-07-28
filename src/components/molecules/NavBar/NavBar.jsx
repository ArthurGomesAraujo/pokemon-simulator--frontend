import React from "react";

import pokeballIcon from '../../../backgrounds/pokeballicon.png';

import './NavBar.css';

const NavBar = ({ onRouteChange }) => {
  return (
    <nav className="navbar">
      <ul>
        <li><img src={pokeballIcon} alt="icon" className="icon"/></li>
        <li className="option" onClick={() => onRouteChange('get-teams')}>Check Teams</li>
        <li className="option" onClick={() => onRouteChange('create-team')}>Create Teams</li>
      </ul>
    </nav>
  );
};

export default NavBar;
