import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import './ShoppingCart.scss';
import { shoppingCartProducts, amountOfProducts, totalPriceOfProducts } from './shoppingCartSlice';

import { ProductList } from '../productList/ProductList';

export function ShoppingCart() {
    const products = useSelector(shoppingCartProducts);
    const amount = useSelector(amountOfProducts)(products);
    const totalPrice = useSelector(totalPriceOfProducts)(products);    
    const [showDetailShoppingCart, setShowDetailShoppingCart] = useState(false);
    const navigate = useNavigate();   

    return (
        <div className={ showDetailShoppingCart ? 'shoppingCart shoppingCart-detail' : 'shoppingCart' }>
            <div className='shoppingCart-header'>
                <span>You have {amount} items in your shopping cart. Total price is <b>{totalPrice}$ </b></span>
                <FontAwesomeIcon 
                    onClick={() => setShowDetailShoppingCart(!showDetailShoppingCart)} 
                    className='shoppingCart-header--icon' 
                    icon={faShoppingCart} 
                    color="white" 
                    size='2x' 
                    shake
                />
            </div>
            { 
                showDetailShoppingCart ? 
                <>
                    <ProductList products={products}/>
                    <span className='shoppingCart-detail--checkout'>
                        <span className='shoppingCart-detail--checkout--text'> Continue to checkout? </span>
                        <button disabled={amount===0} onClick={()=> navigate("/checkout")}>
                            <FontAwesomeIcon icon={faArrowRightLong} size="2x" />
                        </button>
                    </span>
                </>
                : null
            }
        </div>
    );
}
