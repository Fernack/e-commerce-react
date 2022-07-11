import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

import './Checkout.scss';

import { useInfiniteScroll } from '../../common/hooks/useInfiniteScroll';
import { Product } from '../product/Product';
import { shoppingCartProducts, amountOfProducts, totalPriceOfProducts, buyAlItems } from '../shoppingCart/shoppingCartSlice';

export function Checkout() {  
  const products = useSelector(shoppingCartProducts);
  const amount = useSelector(amountOfProducts)(products);
  const totalPrice = useSelector(totalPriceOfProducts)(products);
  const [dataSlice, listInnerRef, onScroll] = useInfiniteScroll(products);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const onClickBuyAllHandler = () => {
    dispatch(buyAlItems());
    navigate('/checkout-success');
  }

  return (
    <div className='checkout'>
      <Link to={'/'}>
        <FontAwesomeIcon className='checkout--arrow' icon={faArrowLeftLong} size='2x' color='black'/>
      </Link>
      <ul className='checkout-list' onScroll={onScroll} ref={listInnerRef}>
          {                
              dataSlice.map(product => <Product key={product.id} product={product}/> )
          }
      </ul>

      <span className='checkout-buy'>
        <span className='checkout-buy--total'> total : {totalPrice}</span>
        
        <span className='checkout-buy--text'> Buy all items </span>        
        <button disabled={amount===0} onClick={onClickBuyAllHandler}>
          <FontAwesomeIcon icon={faArrowRightLong} size="2x" />
        </button>
      </span>
    </div>        
);
}
