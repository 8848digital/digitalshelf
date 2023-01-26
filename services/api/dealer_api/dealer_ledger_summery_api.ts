import React from 'react'
import { CONSTANTS } from "../../config/api-config";
import { client } from "./../general_api/cookie_instance";
import { DealerLegderSummeryMethod } from '../../methods/dealer_ledger_summery_method';

const DealerLegderSummery = async () => {
    let response: any;

    const config = {
        headers: {
            Accept: 'application/json'
        },
        withCredentials: true
    };

    await client.get(`${CONSTANTS.API_BASE_URL}/${DealerLegderSummeryMethod.dealerLedgerSummery}`, config)
    .then((res) => {
        response = res.data.message.data
        console.log("ledger summery api res", response)
    }).catch((error) => {
        console.log(error)
    })

    return response

}

const getDleaerLedgerSummery = () => DealerLegderSummery ()
export default getDleaerLedgerSummery;
