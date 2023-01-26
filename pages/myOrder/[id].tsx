import React, { useEffect, useState } from 'react'
import getCartHistoryApi from '../../services/api/my_order_api/order_history';
import loadingGif from '../../public/assets/images/circle-loader.gif';
import { useRouter } from 'next/router';
import OrderDetailCom from '../../components/orderDetail'
import Faviconheader from '../../components/Faviconheader/Faviconheader';

const OrderDetail = () => {
    
    // }
    return (
        <>
        <Faviconheader/>
        <OrderDetailCom  />
        </>
    )
}

export default OrderDetail;
