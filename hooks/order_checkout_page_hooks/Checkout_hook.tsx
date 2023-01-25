import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Customer_address } from '../../store/slices/customer_addresses_slice/CustomerAddress_slice';
import { getCustomerAddressApi, getCustomer_Address } from '../../store/slices/customer_addresses_slice/getCustomerAddress_slice';
import useProfilePage from '../profile_page_hooks/profilePage_hook';


const useCheckoutHook = () => {
    const [shippingAddressItems, setShippingAddressItems] = useState<any>([]);
    let profileList:any = useProfilePage();

    // const [getAddress, setAddress] = useState<any>([]);
    
    const dispatch = useDispatch();
    // const customerAddress = useSelector(Customer_address);
    // console.log("shipping address hook - ", customerAddress.data);

    const getCustomerAddress = useSelector(getCustomer_Address)
    console.log("get customer address in hook",getCustomerAddress.data)


    // const getCustomerAddress = useSelector(getCustomer_Address)
    // console.log("customer address hook",getCustomerAddress.data)

    useEffect(() => {
        dispatch(getCustomerAddressApi());
    }, []);



    useEffect(() => {
        setShippingAddressItems(getCustomerAddress.data);
        // setAddress(getCustomerAddress.data)    
    }, [])
    useEffect(() => {
        setShippingAddressItems(getCustomerAddress.data);
        // setAddress(getCustomerAddress.data)    
    }, [getCustomerAddress.data])

    // console.log("customerr",shippingAddressItems);
    // console.log("customerr",getCustomerAddress);
    // console.log("addresses",getAddress);

    return {
        shippingAddressItems,
        profileList,
        getCustomerAddress
    }
}

export default useCheckoutHook;