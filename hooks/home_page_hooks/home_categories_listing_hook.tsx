import {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HomeCategoriesWithListingAPI, homeCategoriesWithListing_state } from '../../store/slices/home_page_slice/home_categories_listing_slice';

const useHomeCategoriesWithListing = () =>
{
    let [homeCategoriesWithListing, setHomeCategoriesWithListing] = useState([]);

    const homeCategoriesWithListingSelector = useSelector(homeCategoriesWithListing_state);

    const dispatch = useDispatch();

    useEffect(()=>
    {
        dispatch(HomeCategoriesWithListingAPI());
    },[])

    useEffect(()=>
    {
        console.log("home categories with listing hook",homeCategoriesWithListingSelector);
        setHomeCategoriesWithListing([...homeCategoriesWithListingSelector.homeCategoriesWithListingData])
    },[homeCategoriesWithListingSelector])

    return homeCategoriesWithListing
}

export default useHomeCategoriesWithListing;