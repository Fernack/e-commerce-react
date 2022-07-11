import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setProducts } from '../../features/productList/productListSlice';

export function useProductsData() {
    const url = 'https://www.amiiboapi.com/api/amiibo/';

    const [productsData, setProductsData] = useState([]);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
   
    useEffect(() => { 
        if (!loading){
            setLoading(true);
            fetch(url)
            .then((response) => {
                response.json().then( rawProducts => {
                    const parsedData = rawProducts.amiibo.map(rawProduct => {
                        rawProduct.id = rawProduct.head + rawProduct.tail;
                        const low = 1;
                        const high = 100;
                        
                        rawProduct.price = 1000 * (Math.floor(Math.random() * (1 + high - low)) + low);

                        return rawProduct;
                    })

                    setProductsData(parsedData);
                    setLoading(true);

                    dispatch(setProducts(parsedData));
                })    
            });
        }
    }, [dispatch, loading])

    return [productsData, loading];
}