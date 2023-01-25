import { useRouter } from "next/router";
import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import ECommerceEnhancedCode from "../../services/api/general_api/ecommerce_enhance_code_api";
import getSalesOrderID from "../../services/api/my_order_api/get_sales_order_id";
import SalesOrderFetch from "../../services/api/my_order_api/get_sales_order_id";
import getCartHistory from "../../services/api/my_order_api/order_history";
import getCartHistoryApi from "../../services/api/my_order_api/order_history";
import { CONSTANTS } from "../../services/config/api-config";
import { CartListingApi } from "../../store/slices/cart_page_slice/cart_slice";

const useThankYou = () =>
{
    const router = useRouter();
    const [id, setId] = useState('');
    const [detail, setdetail] = useState([]);
    const [ecommerceData, setEcommerceData] = useState({});

    const dispatch = useDispatch();
    console.log("get fetch router path", router.asPath.split('/')[1]);
    console.log("get fetch router", router.query.id)

    // const get_data = getSalesOrderID();

    useEffect(()=>
    {
        if(router.asPath.split('/')[1] !== "thankyou")
        {
            // console.log("in my order")
            const getOrderDetail = async () => {
                const getOrderDetailData = await getCartHistory("",router.query.id);
                console.log(
                  "get sales order data for order detail",
                  getOrderDetailData
                );
                setdetail(getOrderDetailData);
            }
            getOrderDetail();
        }
        else
        {
          // console.log("in thank you")
          const getSalesOrderID = async () => {
            const fetchID = await SalesOrderFetch();
            console.log(" get fetch Id", fetchID);
            setId(fetchID);
            const method = "get_order_details";
            const entity = "order";
            let ecommerce_enhanced_code = await ECommerceEnhancedCode(
              `${CONSTANTS.API_BASE_URL}/${CONSTANTS.API_MANDATE_PARAMS}`,
              method,
              entity,
              fetchID
            );
            console.log(
              "e-commerce enhanced code api res",
              ecommerce_enhanced_code
            );
            setEcommerceData({...ecommerce_enhanced_code });
            const getOrderDetailData = await getCartHistory("", fetchID);
            console.log(
              "get sales order data for order detail",
              getOrderDetailData
            );
            setdetail(getOrderDetailData);
            dispatch(CartListingApi());
          };
          getSalesOrderID();
        }
    //    const getSalesOrderID =async () =>
    //    {
    //        const fetchID = await SalesOrderFetch();
    //        console.log(" get fetch Id", fetchID);
    //        setId(fetchID)
    //        if(router.asPath.split('/')[1] !== "thankyou")
    //        {
    //         const getOrderDetail = async () => {
    //             const getOrderDetailData = await getCartHistory("",router.query.id);
    //             console.log(
    //               "get sales order data for order detail",
    //               getOrderDetailData
    //             );
    //             setdetail(getOrderDetailData);
    //             getOrderDetail();
    //         }
    //        }
    //        else
    //        {
    //            const getOrderDetailData = await getCartHistory("",fetchID);
    //            console.log("get sales order data for order detail", getOrderDetailData);
    //            setdetail(getOrderDetailData);
    //            dispatch(CartListingApi())
    //        }
    //    }

        // getSalesOrderID()
    },[router])

    // useEffect(()=>
    // {

    //     const getOrderDetail = async () => {
    //       const getOrderDetailData = await getCartHistory("",router.query.id);
    //       console.log(
    //         "get sales order data for order detail",
    //         getOrderDetailData
    //       );
    //       setdetail(getOrderDetailData);
    //     };

    //     getOrderDetail();
    // },[router])

    // useEffect(()=>
    // {
    //     const getSalesOrderData = async() =>
    //     {
    //        await getCartHistory("",id).then((res)=>
    //         {
    //             console.log("get sales order data for order detail", res);
    //             setdetail(res);
    //         }).catch((err)=>
    //         {
    //             console.log(err);
    //         })
    //     }

    //     getSalesOrderData()
    // },[])
    console.log("get sales order data state",detail);

    return{
       id,
       detail,
       ecommerceData
    }
}

export default useThankYou