import React from 'react';

import { ShoppingCart } from '../shoppingCart/ShoppingCart';

export function Layout({children}) {  

    return (
        <>  
            { children }
            <ShoppingCart/>
        </>
    );
}
