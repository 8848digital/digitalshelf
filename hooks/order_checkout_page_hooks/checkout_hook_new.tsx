import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { CustomerShippingAddressAPi,  customer_shipping_address } from "../../store/slices/customer_addresses_slice/customer_shipping_address_slice";
import { CustomerBillingAddressAPi,  customer_billing_address } from "../../store/slices/customer_addresses_slice/customer_billing_address_slice";
import { summary_state } from "../../store/slices/checkout_page_slice/order_summary";
import useCartListing from "../cart_page_hooks/cart_hook";
import { getOrderSummary } from "../../store/slices/checkout_page_slice/order_summary";
import { CartListingApi } from "../../store/slices/cart_page_slice/cart_slice";
import { Cart_Listing } from "../../store/slices/cart_page_slice/cart_slice";
import axios from "axios";
import { client } from "../../services/api/general_api/cookie_instance";

import {
  ProfilePageApi,
  profile_page,
} from "../../store/slices/profile_page_slice/profilePage_slice";

const useCheckOutNewHook = () =>
{
    const { cartListingItems } = useCartListing();
    let [shippingAddresses, setshippingAddresses] = useState<any>([]);
    let [billingAddresses, setbillingAddresses] = useState<any>([]);
    let [orderSummary  , setorderSummary] = useState <any>([]);
    let [quotationId, setquotationId] =  useState("");
    const [initialShippingAddress, setinitialShippingAddress] = useState<any>("");
    const [initialBillingAddress, setinitialBillingAddress] = useState<any>("");
    let [quotId , setquotId] = useState<any>("");

    const [billingCheckbox, setBillingCheckbox] = useState<boolean>(true);

    const customerShippingAddresses:any = useSelector(customer_shipping_address) ;
    const customerBillingAddresses:any = useSelector(customer_billing_address) ;

    const cartProducts = useSelector(Cart_Listing);
    const orderSummaryStore:any = useSelector(summary_state)
    
    const dispatch = useDispatch();

    console.log("checkout summary store" ,orderSummaryStore );

    const config = {
      headers: {
        Accept: 'application/json'
      },
      withCredentials:true
    };

    const handleChangeSameAsShipping = (checkboxValue:boolean) =>
    {
      console.log("same as shipping address checkbox value", checkboxValue)
      if(checkboxValue)
      {
        setBillingCheckbox(!billingCheckbox);
        setinitialBillingAddress(initialShippingAddress);
        // console.log("same as shipping address billing address", initialBillingAddress)
      }
      else
      {
        setBillingCheckbox(!billingCheckbox);
        setinitialBillingAddress(customerBillingAddresses.initialBillingAddressID);
        // setinitialBillingAddress(initialBillingAddress);
        // console.log("same as shipping address  will take new billing address",initialBillingAddress )
      }
      // if(checkboxValue)
      // {
      //   setinitialBillingAddress(initialShippingAddress);
      //   console.log("same as shipping address billing address in if", initialBillingAddress)
      // }
      // else
      // {
      //   setBillingCheckbox(!billingCheckbox);
      //   setinitialBillingAddress(initialBillingAddress);
      //   console.log("same as shipping address billing address in else", initialBillingAddress)
      // }
    }

    // const handleShippingAddressOnChange = (shipping_address_id:any) =>
    // {
    //     console.log("checkout handleShippingAddressOnChange id here", shipping_address_id);
    //     setinitialShippingAddress(shipping_address_id);
    // }

    useEffect(()=>
    {

      const checkIfGuestLogin = async() =>
      {
        await client.get(`https://scott-sports-v14.8848digitalerp.com/api/method/frappe.auth.get_logged_user`, config).then((res)=>{
          console.log("guest login check",res);
          const saveGuest = res.data.message.includes("random");
          if(saveGuest)
          {
            localStorage.setItem("guest",res.data.message)
          }
          
        }).catch((err)=>
        {
          console.log(err)
        })
      }

      checkIfGuestLogin()
    },[])
    
    useEffect(() => {
        dispatch(CustomerShippingAddressAPi());
        dispatch(CustomerBillingAddressAPi());
        
    }, [])
    
    useEffect(()=>
    {
        console.log("checkout get cart id ", cartProducts);
        dispatch(getOrderSummary(cartProducts?.item[0]?.id))

    },[])

    useEffect(()=>
    {
        setshippingAddresses([...customerShippingAddresses.data])
        setbillingAddresses([...customerBillingAddresses.data])
        setinitialShippingAddress(customerShippingAddresses.initialShippingAddressID);
        setinitialBillingAddress(customerShippingAddresses.initialShippingAddressID);
        // setinitialBillingAddress(customerBillingAddresses.initialBillingAddressID);
        // console.log("",)
        // setquotId(cartProducts?.item[0]?.id)                                                                                                                                                                                                                                         
    },[customerShippingAddresses.data, customerBillingAddresses.data])
    
    useEffect(()=>
    {
        // console.log("checkout order summary ", orderSummaryStore.messagse);
        setorderSummary(orderSummaryStore?.message)
        setquotationId(cartProducts?.item[0]?.id);
    },[orderSummaryStore])

    useEffect(()=>
    {
      if(billingCheckbox)
      {
        // setBillingCheckbox(!billingCheckbox);
        setinitialBillingAddress(initialShippingAddress);
        console.log("same as shipping address billing address", initialBillingAddress)
      }
    },[initialShippingAddress])
    
    // console.log("checkout shipping address in hook after dispatch",customerShippingAddresses );
    // console.log("checkout shipping addressses state set",shippingAddresses );

    // console.log("checkout billing address in hook after dispatch",customerBillingAddresses );
    // console.log("checkout billing addressses state set",billingAddresses );

    // console.log("checkout cart id", cartProducts?.item[0]?.id);
   
    // console.log("checkout quote id in hook", quotId)
    // console.log("hook initialshippingaddress//",initialShippingAddress)

    return{
        shippingAddresses,
        billingAddresses,
        initialShippingAddress,
        setinitialShippingAddress,
        initialBillingAddress,
        setinitialBillingAddress,
        orderSummary,
        quotationId,
        handleChangeSameAsShipping,
        billingCheckbox,
        setBillingCheckbox
    }
}

export default useCheckOutNewHook