import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  ProfilePageApi,
  profile_page,
} from "../../store/slices/profile_page_slice/profilePage_slice";

const useProfilePage = () => {
  const [profileList, setProfileList] = useState<any>([]);

  const dispatch = useDispatch();
  const profileData = useSelector(profile_page);
  console.log("profile data hook", profileData);

  useEffect(() => {
    console.log("profile page initial load");
    dispatch(ProfilePageApi());
    setProfileList(profileData.data);
  }, []);

  useEffect(() => {
    setProfileList(profileData.data);
  }, [profileData.data.billing_address]);

  console.log("hook end", profileList);
  return {
    profileList,
  };
};

export default useProfilePage;
