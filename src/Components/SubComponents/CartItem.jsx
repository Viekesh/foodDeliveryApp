import { AddRounded, RemoveRounded } from '@mui/icons-material';
import React, { useState, useEffect } from 'react';
import { useStateValue } from './StateProvider';
import { actionType } from "./Reducer";



let cartItems = [];

const CartItem = ({ itemId, name, imgSrc, price }) => {

    const [qty, setQty] = useState(1);

    const [{ cart }, dispatch] = useStateValue();

    const [itemPrice, setItemPrice] = useState(parseInt(qty) * parseFloat(price));

    useEffect(() => {
        cartItems = cart;
        setItemPrice(parseInt(qty) * parseFloat(price))
    }, [qty]);

    const updateQuantity = (action, id) => {
        if (action === "add") {
            setQty(qty + 1);
        } else {
            if (qty == 1) {
                cartItems.pop(id);
                dispatch({
                    type: actionType.SET_CART,
                    cart: cartItems,
                })
            }
            setQty(qty - 1);
        }
    }


    return (
        <div className='cart-item'>
            <div className="img-box">
                <img src={imgSrc} alt="" />
            </div>

            <div className="item-section">
                <h2 className="item-name">{name}</h2>
                <div className="item-quantity">
                    <span>{qty}</span>
                    <div className="quantity">
                        <RemoveRounded onClick={() => updateQuantity("remove", itemId)} />
                        <AddRounded onClick={() => updateQuantity("add", itemId)} />
                    </div>
                </div>
            </div>

            <p className="item-price">
                <span className="dolor">$</span>
                <span className="item-price-value">{itemPrice}</span>
            </p>
        </div>
    )
}

export default CartItem;