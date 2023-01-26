import React from 'react'
import { CONSTANTS } from "../../config/api-config";
import { client } from "./../general_api/cookie_instance";
import { DealerLegderMethod } from '../../methods/dealer_ledger_method';

const DealerLegder = async (party:any,month?:any,from_date?:any , to_date?:any ) => {
    let response: any;
    let url:any;
    const config = {
        headers: {
            Accept: 'application/json'
        },
        withCredentials: true
    };
    if (month) {
        // console.log("in month", month)
        url = `${CONSTANTS.API_BASE_URL}/${DealerLegderMethod.dealerLedger}&party=${party}&month=${month}`
    }
    else{
        // console.log("in date", from_date, to_date)
        url = `${CONSTANTS.API_BASE_URL}/${DealerLegderMethod.dealerLedger}&party=${party}&from_date=${from_date}&to_date=${to_date}`
    }

    await client.get(url, config).then((res) => {
        response = res.data.message.data
        console.log("ledger api res", response)
    }).catch((error) => {
        console.log(error)
    })


    return response

}

const getDleaerLedger = (party:any,month?:any,from_date?:any , to_date?:any) => DealerLegder (party,month,from_date , to_date)
export default getDleaerLedger;
