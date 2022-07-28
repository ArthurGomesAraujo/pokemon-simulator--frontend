import React from 'react';

import './CompSquare.css';

const CompSquare = ({ image }) => {
    return (
        <div className='compsquare-container'>
            <img src={image} alt="team-member" className="compsquare-image" />
        </div>
    )
}

export default CompSquare;