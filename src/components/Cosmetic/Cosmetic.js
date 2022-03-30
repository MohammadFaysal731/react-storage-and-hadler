import React from 'react';
import { addToDb, deleteShoppingCart, removeFromDb } from '../../localStorage';
import './Cosmetic.css'
const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic
    const addToCart = (id) => {
        // console.log('item added', id)
        addToDb(id)
    }
    const removeFromCart = (id) => {
        removeFromDb(id);
        deleteShoppingCart(id);
    }
    // const addToCartWithParameters = () => addToCart(id);
    return (
        <div className='product'>
            <h2>Buy this:{name}</h2>
            <p>Only for: ${price}</p>
            <p><small>it has id:{id}</small></p>
            {/* <button onClick={addToCartWithParameters}>Purchase</button> */}
            <button onClick={() => addToCart(id)}>Add To Cart</button>
            <button onClick={() => removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;