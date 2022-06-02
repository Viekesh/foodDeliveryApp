import { ChevronRightRounded } from '@mui/icons-material';
import React from 'react';

const RowMenuCard = ({ imgSrc, name, isActive }) => {

    return (
        <div className={`rowMenuCard ${isActive ? `active` : ``}`}>
            <div className="img-box x-y-axis-center">
                <img src={imgSrc} alt="img" />
            </div>
            <h3>{name}</h3>
            <i className="load-menu x-y-axis-center">
                <ChevronRightRounded />
            </i>
        </div>
    )
}

export default RowMenuCard;