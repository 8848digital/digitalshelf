import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { cartHistoryApi, history } from '../../store/slices/cart_page_slice/get_cart_history';

const useCartHistoryHook = () => {
    const [cartHistoryItems, setcartHistoryItems] = useState<any>([]);
    const dispatch = useDispatch();
    const cartProducts = useSelector(history);
    console.log("cart history selector - ",cartProducts);


    useEffect(() => {
        dispatch(cartHistoryApi());
        // setTimeout(() => { 
        // },2000)
    },[])

    useEffect(() => {
        setcartHistoryItems(cartProducts.item);    
    }, [cartProducts.item])

    console.log("cart history hook",cartHistoryItems);

    return (
        cartHistoryItems
    )
}

export default useCartHistoryHook;