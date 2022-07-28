import React, { useState } from 'react';

import './OptionsMenu.css';

const OptionsMenu = ({ onRouteChange }) => {
    return (
        <div className='pokedex-bg'>
            <section className='button-group-menu'>
                <button className='pokebutton' onClick={() => onRouteChange('get-teams')}>Check Teams</button>
                <button className='pokebutton' onClick={() => onRouteChange('create-team')}>Create Teams</button>
            </section>
        </div>
    )
}
 export default OptionsMenu;