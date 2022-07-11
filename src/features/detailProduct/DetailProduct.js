import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faCircleMinus, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';

import './DetailProduct.scss';

import { getProductById } from '../productList/productListSlice';
import { addProduct, removeProduct } from '../shoppingCart/shoppingCartSlice';

export function DetailProduct() {
    let { id } = useParams();
    const product = useSelector(getProductById)(id);
    const dispatch = useDispatch();

    return (
        <div className='detail-product'>
            <Link to={'/'}>
                <FontAwesomeIcon className='detail-product--arrow' icon={faArrowLeftLong} size='2x' color='black' />
            </Link>

            {
                product ?  
                    <>
                        <img alt='none' src={product.image} className="detail-product--image"/>  
                        <div className='detail-product-description'>
                            <span> {product.name} </span> 
                            <span> {product.amiiboSeries} </span>
                            <span> {product.release.au} </span>
                            <span className='detail-product-description--price'> {product.price}$</span>
                            <div className='detail-product-description--controls'>
                                <button onClick={() => dispatch(removeProduct(product.id))}>
                                    <FontAwesomeIcon icon={faCircleMinus} size='4x' />
                                </button>
                                <button onClick={() => dispatch(addProduct({id: product.id, product}))}>
                                    <FontAwesomeIcon icon={faCirclePlus} size='4x' />
                                </button>
                            </div>
                        </div>
                        
                    </>
                : null 
            }
        </div>
    );
}
