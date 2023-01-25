import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dealerLedgerApi, dealerledger_state } from '../../store/slices/dealer_slice/dealer_ledger_slice'
import { dealerLedgerSummeryApi, dealerledgersummery_state } from '../../store/slices/dealer_slice/dealer_ledger_summery_slice'

const useDealerLedger = () => {
  let[dealerLedgerSummery , setDealerLedgerSummery] = useState<any>({});
    let [dealerLedgerPost, setdealerLedgerPost] = useState<any>({})

    const dealerledger = useSelector(dealerledger_state)

    console.log("post ledger in useselector", dealerledger)

   const dealerLedgersum = useSelector(dealerledgersummery_state);
   console.log("dl ledger summery hook",dealerLedgersum )
    const dispatch = useDispatch();


    useEffect(()=>{
      dispatch(dealerLedgerSummeryApi());
  },[])
 

    useEffect(() => {
      console.log("set dealer ledger summary data", dealerLedgersum);
      setDealerLedgerSummery({ ...dealerLedgersum.item });
    }, [dealerLedgersum]);


    useEffect(() => {
      setdealerLedgerPost({...dealerledger.item});
        // setbrandItems(brands.items);
        // console.log("ledger hook res",setDealerLedgr)
      }, []);

      return {
        dealerLedgerPost, 
        dealerLedgerSummery
      } ;
      
}

export default useDealerLedger
