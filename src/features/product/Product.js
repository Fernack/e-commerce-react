import React from 'react';

export function Product({product, onClick}) {

    return (
        <div className='product' onClick={()=>onClick ? onClick() : null}>
            <img alt='none' src={product.image} className="product-image"/>  
            <span className='product-description'>{product.name} - {product.amiiboSeries}</span>
            <span className='product-price'>Price: {product.price}$</span>
        </div>
    );
}
