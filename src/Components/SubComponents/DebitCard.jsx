import React from 'react';

const DebitCard = () => {
    return (
        <div className='card-group'>
            <img src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2FVisaLogo.png?alt=media&token=d6cac80d-a066-4388-97c2-9a57acfe4266" alt="" className="card-logo" />
            <img src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2Fchip.png?alt=media&token=401162f6-2dd2-4da4-bef7-6479c132789c" alt="" className="card-chip" />

            <div className="card-number">1234 567 8910</div>
            <div className="card-name">Abc Def</div>
            <div className="card-from">11/12</div>
            <div className="card-to">13/14</div>
            <div className="card-ring"></div>
        </div>
    )
}

export default DebitCard;