import React,{useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";

import { dealerProfilePageApi, dealerprofile_page } from "../../store/slices/profile_page_slice/dealer_profile_slice";


const dealerProfilePage = () => {

    const [dealerprofileList , setdealerProfileList ] = useState<any>([]);

    const dispatch = useDispatch<any>()
    const newprofileData = useSelector(dealerprofile_page);
    console.log("profile data hook",newprofileData)


    useEffect(() =>{
        console.log("profile page initial load")
        dispatch(dealerProfilePageApi())
    },[])

    useEffect(() => {
        // console.log("Profile Page - ",profileData.item)
        setTimeout(()=>{
            console.log("settimeout")
            setdealerProfileList(newprofileData.data);
        },1000)
       
    }, [dealerprofileList])


    return (
        dealerprofileList
    )
};

export default dealerProfilePage 