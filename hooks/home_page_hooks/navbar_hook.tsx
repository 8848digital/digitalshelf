import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { navbarAPI, navbar_state } from "../../store/slices/home_page_slice/navbar_slice";
// import cartListing, { CartListingApi } from "../../../store/screens/cart-listing";
import { Cart_Listing } from "../../store/slices/cart_page_slice/cart_slice";
import { CartListingApi } from "../../store/slices/cart_page_slice/cart_slice";
import {login_state } from "../../store/slices/auth_slice/login-slice";
const useNavbar = () => {
    // window.location.reload();   
    console.log("test 2")
    const dispatch = useDispatch();
    const nav = useSelector(navbar_state);
    const cart = useSelector(Cart_Listing);
    const getLoginStore = useSelector(login_state );
    // console.log("cart listing in navbar",cart)
    // const cart = useSelector((state: RootState) => state.cartListing);
    let [navData, setnavData] = useState<any>([]);

    const [cartCount, setcartCount] = useState<number>(0);
    // console.log(nav.items);
    // console.log(cart);
    // const [cartCount, setCartCount] = useState<number>(0);
    // const param = useParams();
    // console.log("Nav Item - ",nav.items);
    // console.log(cart);


    console.log("navbar hook", nav);
    console.log("navbar hook data", nav.items);
    console.log("navbar type of ",typeof nav.items);

    console.log("navbar cart", cart);
    // console.log(cart);
    // console.log(cart.item.length);

    // useEffect(() => {
    //     const getSessionId = localStorage.getItem('session_id');
    //     if (localStorage.getItem('session_id')) {
    //         dispatch(CartListingApi(getSessionId));
    //     }
    //     else {
    //         dispatch(CartListingApi())
    //     }
    // }, [])

    // useEffect(() => {
    //     dispatch(Cart_Listing);
    // }, [])

    useEffect(() => {
        console.log("navbar use effect");
        // if(typeof nav.items !== 'undefined' && nav.items.length === 0)
        // {
        //         console.log("navbar array empty")
        //     }
            dispatch(navbarAPI());
        // dispatch(CartListingApi())
        // const getSessionId = localStorage.getItem('session_id');
        // if (localStorage.getItem('session_id')) {
        //     dispatch(CartListingApi(getSessionId));
        // }
        // else {
        //     dispatch(CartListingApi())
        // }
    }, []);

    // useEffect(()=>
    // {   
    //     if(typeof cart.item !== 'undefined' && cart.item.length === 0)
    //     {
    //         dispatch(CartListingApi())
    //     }
    // },[cart.item])
    

    
    useEffect(() => {
        setnavData([...nav.items]);
        // setnavData([...navData, ...nav.items]);
        setcartCount(cart.cartCount)
    }, [nav.items,cart.item])


    return {
        navData,
        cartCount
    }
}

export default useNavbar;