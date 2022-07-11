import { useEffect, useState, useRef } from 'react';

export function useInfiniteScroll(data) {
    const page = useRef({number: 0}); 
    const [dataSlice, setDataSlice] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const listInnerRef = useRef();
    const prevDataRef = useRef();

    const onScroll = () => {
        if (listInnerRef.current) {
          const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;

            if (scrollTop + clientHeight > (scrollHeight - 10)) {
                setIsLoading(true);
            }
        }
    }   

    useEffect(() => {
        const fetch_data = () => {
            const startSliceData = page.current.number * 10;
            page.current.number++;
                    
            return data.slice(startSliceData, startSliceData + 10);
        }

        if (isLoading) {
            const data = fetch_data();
            setDataSlice(prev => [...prev, ...data]);
            setIsLoading(false);
        }
        else if (prevDataRef.current !== data){
            page.current.number = 0;

            const data = fetch_data()
            setDataSlice(data);
            setIsLoading(false);
        }

        prevDataRef.current = data;
    }, [isLoading, data])

    return [dataSlice, listInnerRef, onScroll, isLoading];
}