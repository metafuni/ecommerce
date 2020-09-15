import React, { useState } from 'react';
import Loading from './Loading';

import { useStateValue } from '../StateProvider';


function Checkout() {
    const [loading, setloading] = useState(true);
    const [{ basket }, dispatch] = useStateValue();

    const deleteFromBasket = (index) => {
        dispatch({
            type: 'DELETE_FROM_BASKET',
            //...
        });
    };

    return (
        <div>
            {basket.length > 0 && (
                <h1>Your basket has {basket.length} items</h1>
            )}
            {basket.length === 0 && (
                <h1>Your basket is empty</h1>
            )}
            {/* {loading && (<Loading />)} */}
        </div>
    )
}

export default Checkout
