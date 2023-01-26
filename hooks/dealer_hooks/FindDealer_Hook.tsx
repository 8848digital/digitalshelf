import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getFindDealerData from "../../services/api/dealer_api/dealer-data-api";
import { findaDealerApi, findDealer_state, getDealerResponse } from "../../store/slices/dealer_slice/find_a_dealer";


const FindDealer_Hook = (selectedState:any ,selectedCity:any, selectedBrand: any) => {
  const dispatch = useDispatch();
  let [state, setState] = useState<any>([]);
  let [city, setCity] = useState<string>("");
  let [brand, setBrand] = useState<string>("");
  let [cityData, setcityData] = useState<any>([]);
  let[dealers, setdealers] = useState<any>([]);
  let [storeName, setStoreName] = useState<string>("");

  const fdealer = useSelector(findDealer_state);
    console.log("//finddealer",fdealer);

  console.log(fdealer);
  useEffect(() => {
    console.log("find dealer hook");
    getFindDealerData().then((res:any) => {
      setState(res)
    });
  }, []);

  useEffect(() => {
    
    console.log("find dealer city data on update",fdealer.cityData)
    console.log("find dealer data on update",fdealer.dealerData)
    setcityData(fdealer.cityData);
    setdealers(fdealer.dealerData);
  }, [fdealer]);

  let handleState = (e: any) => {
    // console.log(e.target.value)
    setState(e.target.value);
    // dispatch(findaDealerApi(state) as any);
    // console.log(state)
  };

  let handleCity = (e:any)=>
  {
    setCity(e.target.value);
    console.log("hookCity",city);
  }

  let handleBrand = (e:any)=>
  {
    setBrand(e.target.value);
    console.log(brand);
  }

  useEffect(() => {
    getFindDealerData(selectedState).then((res:any) => setCity(res));
  }, [selectedState])

  return {
    state,
    handleState,
    handleCity,
    handleBrand,
    cityData,
    dealers,
  };
};

export default FindDealer_Hook;
