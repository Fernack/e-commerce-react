import React from 'react';

import './ProductList.scss';

import { ProductItem } from '../productItem/ProductItem';
import { useInfiniteScroll } from '../../common/hooks/useInfiniteScroll';

export function ProductList({products}) {

    const [dataSlice, listInnerRef, onScroll] = useInfiniteScroll(products);
    
    return (
        <ul className='productList' onScroll={onScroll} ref={listInnerRef}>
            {                
                dataSlice.map(product => <ProductItem key={product.id} product={product}/> )
            }
        </ul>        
    );
}
