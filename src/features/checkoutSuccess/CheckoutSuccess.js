import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

import './CheckoutSuccess.scss';

export function CheckoutSuccess() { 
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() =>  navigate('/'), 2000);
        return () => clearTimeout(timer);
    }, [navigate])
    
    return (
        <div className='checkout-success'>
            <span> The order was generated correctly.</span>
            <span> Thank you!</span>
            <Link to={'/'}>
                <FontAwesomeIcon icon={faArrowRightLong} size="2x" color='white' />
            </Link>        
        </div>        
    );
}
