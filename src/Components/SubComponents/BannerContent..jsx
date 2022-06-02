import React from 'react'
import { NavLink } from 'react-router-dom';

const BannerContent = ({ name, currency, discount, more }) => {
    return (
        <div className='banner-content'>
            <h3>Hello {name},</h3>
            <p>
                Get free discount for every <span>{`${currency}${discount}`}</span>{" "}
                purchase
            </p>
            <NavLink to={more}>Learn More</NavLink>
        </div>
    )
}

export default BannerContent;