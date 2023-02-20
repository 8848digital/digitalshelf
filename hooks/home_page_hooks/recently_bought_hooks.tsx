import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RecentlyBoughtDataAPI, recently_bought_items_state } from "../../store/slices/home_page_slice/recently_bought_items_slice";


const useRecentlyBoughtItems = () =>
{
    let [recentlyBoughtItemsData, setRecentlyBoughtItemsData] = useState<any>([]);
    let [isLoading, setIsLoading] = useState(true);

    const dispatch = useDispatch();

    const recentlyBoughtItemsDataSelector = useSelector(recently_bought_items_state);

    useEffect(()=>
    {
        dispatch(RecentlyBoughtDataAPI());
    },[])

    useEffect(()=>
    {
        console.log("recently bought items data from selector",recentlyBoughtItemsDataSelector);
        // console.log("recently type check", typeof recentlyBoughtItemsDataSelector.data );
        if(recentlyBoughtItemsDataSelector.data !== undefined)
        {
            if(recentlyBoughtItemsDataSelector.data.length !== 0)
            {
                // console.log("recently check if");   
                setRecentlyBoughtItemsData((recentlyBoughtItemsData = [...recentlyBoughtItemsDataSelector.data]));
                setIsLoading(false);
            }
            else
            {
                // console.log("recently check else");   
                setRecentlyBoughtItemsData((recentlyBoughtItemsData = []));
                setIsLoading(false);
            }
        }
    },[recentlyBoughtItemsDataSelector])

    return {isLoading,recentlyBoughtItemsData}
}

export default useRecentlyBoughtItems