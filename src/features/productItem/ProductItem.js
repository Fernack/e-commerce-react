import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faCircleMinus, faCircle } from '@fortawesome/free-solid-svg-icons';

import './ProductItem.scss';

import { addProduct, removeProduct } from '../shoppingCart/shoppingCartSlice';
import { Product } from '../product/Product';


export function ProductItem({product}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    return (
        <div className='productItem'>
            <Product product={product} onClick={()=> navigate(`/product/${product.id}`)}/>
            {
                product.amount ? 
                    <span className='product-amount'>Amount: {product.amount} </span>
                    : null
            }
            <i className='fa-layers'>
                <FontAwesomeIcon icon={faCircle} size='2x' color='white' />-
                <FontAwesomeIcon onClick={() => dispatch(removeProduct(product.id))} icon={faCircleMinus} size='2x' />
            </i>
            <i className='fa-layers'>
                <FontAwesomeIcon icon={faCircle} size='2x' color='white' />-
                <FontAwesomeIcon onClick={() => dispatch(addProduct({id: product.id, product}))} icon={faCirclePlus} size='2x' />
            </i>            
        </div>
    );
}
