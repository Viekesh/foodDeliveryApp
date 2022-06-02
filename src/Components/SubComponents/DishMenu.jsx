import { ChevronRightRounded } from '@mui/icons-material';
import React from 'react'

const DishMenus = ({ name }) => {
    return (
        <div className="submenu-container y-axis-center">
            <h3>{name}</h3>
            <div className="view-all y-axis-center">
                <p className='y-axis-center'>View All <span className='y-axis-center'><ChevronRightRounded /></span></p>
            </div>
        </div>
    )
}

export default DishMenus;