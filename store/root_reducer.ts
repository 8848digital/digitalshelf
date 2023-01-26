import { combineReducers } from "@reduxjs/toolkit";
import NavbarReducer from "./slices/home_page_slice/navbar_slice";
import CarouselReducer from "./slices/home_page_slice/carousel_slice";
import BrandsReducer from "./slices/home_page_slice/brands_slice";
import HomeCategoriesReducer from "./slices/home_page_slice/home_categories_slice";
import ProductListingReducer from "./slices/product_listing_slice/product_listing_slice";
import ProductDetailReducer from "./slices/product_detail_slice/product_detail_slice";
import ProductVariantReducer from "./slices/product_detail_slice/product_variant_slice";
import BreadCrumbsReducer from "./slices/general_slice/breadcrumbs";
import FiltersReducer from "./slices/product_listing_slice/filter_slice";
import LoginReducer from "./slices/auth_slice/login-slice";
import OrderSummary from "./slices/checkout_page_slice/order_summary";
import ProfilePage from "./slices/profile_page_slice/profilePage_slice";
import DealerAddCart from "./slices/cart_page_slice/dealer_addto_cart_slice";
import CartReducer from "./slices/cart_page_slice/cart_slice";
import DeleteFromcCartReducer from "./slices/cart_page_slice/delete_from_slice";
import registration from "./slices/auth_slice/registration_slice";
import CartHistory from "./slices/cart_page_slice/get_cart_history";
import dealerprofilePage from "./slices/profile_page_slice/dealer_profile_slice";
import ChangepasswordReducer from "./slices/auth_slice/change_password";
import StoreCustomerAddress from "./slices/customer_addresses_slice/store_address_slice";
import Resetpassword from "./slices/auth_slice/forgot_password_slice";
import GetCustomerAddress from "./slices/customer_addresses_slice/getCustomerAddress_slice";
import FindaDealer from "../store/slices/dealer_slice/find_a_dealer";

// new checkout code
import CustomerShippingAddress from "./slices/customer_addresses_slice/customer_shipping_address_slice";
import CustomerBillingAddress from "./slices/customer_addresses_slice/customer_billing_address_slice";
import StoreCustomerAddressModal from "./slices/customer_addresses_slice/visitor_store_customer_address_slice";
import AddCart from "./slices/cart_page_slice/add_to_cart";
import LogoutSuccess from "../store/slices/auth_slice/login-slice";
import SearchTerm from "./slices/product_listing_slice/store_search_term_slice";
import DealerLegerScreen from "./slices/dealer_slice/dealer_ledger_slice"
import DealerLegerSummeryScreen from "./slices/dealer_slice/dealer_ledger_summery_slice"
import StoreReplacementImages from "./slices/my_order_slice/store_replacement_images_slice";
import Wishlist from "./slices/general_slice/wishlist_slice";
import storage from "redux-persist/lib/storage";
import SuggestedProScreen from "./slices/product_detail_slice/suggested_pro_slice";
// const rootReducer = combineReducers({
//     navbar: NavbarReducer,
//     carousel: CarouselReducer,
//     brands: BrandsReducer,
//     homeCategories: HomeCategoriesReducer,
//     productListing: ProductListingReducer,
//     productDetail:ProductDetailReducer,
//     productVariants:ProductVariantReducer,
//     breadCrumbs: BreadCrumbsReducer,
//     filters: FiltersReducer,
//     Login:LoginReducer,
//     orderSummary: OrderSummary,
//     // CartListing : CartListing,
//     cart : CartReducer,
//     deleteFromcart: DeleteFromcCartReducer,
//     registration : registration,
//     cartHistory: CartHistory,
//     Changepassword: ChangepasswordReducer,
//     ProfilePage : ProfilePage,
//     StoreCustomerAddress : StoreCustomerAddress,
//     dealerprofilePage: dealerprofilePage,
//     Resetpassword:Resetpassword,
//     GetCustomerAddress : GetCustomerAddress,
//     DealerAddCart:DealerAddCart,
//     FindDealer : FindaDealer,

//     // customer shipping address new
//     customerShippingAddress: CustomerShippingAddress,
//     customerBillingAddress : CustomerBillingAddress,
//     storeCustomerAddressModal : StoreCustomerAddressModal,
//     addcart:AddCart
// })
// export type RootState = ReturnType<typeof rootReducer>
// export default rootReducer;

// import storage from './storage'
// import { AnyAction, Reducer } from '@reduxjs/toolkit'
// ... import other components you need

const appReducer = combineReducers({
  navbar: NavbarReducer,
  carousel: CarouselReducer,
  brands: BrandsReducer,
  homeCategories: HomeCategoriesReducer,
  productListing: ProductListingReducer,
  productDetail: ProductDetailReducer,
  productVariants: ProductVariantReducer,
  breadCrumbs: BreadCrumbsReducer,
  filters: FiltersReducer,
  Login: LoginReducer,
  orderSummary: OrderSummary,
  // CartListing : CartListing,
  cart: CartReducer,
  deleteFromcart: DeleteFromcCartReducer,
  registration: registration,
  cartHistory: CartHistory,
  Changepassword: ChangepasswordReducer,
  ProfilePage: ProfilePage,
  StoreCustomerAddress: StoreCustomerAddressModal,
  dealerprofilePage: dealerprofilePage,
  Resetpassword: Resetpassword,
  GetCustomerAddress: GetCustomerAddress,
  DealerAddCart: DealerAddCart,
  FindDealer: FindaDealer,

  // customer shipping address new
  customerShippingAddress: CustomerShippingAddress,
  customerBillingAddress: CustomerBillingAddress,
  storeCustomerAddressModal: StoreCustomerAddress,
  addcart: AddCart,
  searchTerm:SearchTerm,
  dealerLedger:DealerLegerScreen,
  dealerLedgerSummery:DealerLegerSummeryScreen,
  storeReplacementImages : StoreReplacementImages,
  wishlist:Wishlist,
  suggestedProScreen : SuggestedProScreen,
});

const rootReducer = (state: any, action: any) => {
    console.log("navbar rootreducer")
    if (action.type === 'Login/LogoutSuccess') {

      // this applies to all keys defined in persistConfig(s)
      // storage.removeItem('persist:root')
      state = undefined

      state = {} as RootState
    }
//   if (action.type === "LogoutSuccess") {
//     state = undefined;
//   }
  return appReducer(state, action);
};

export default rootReducer;
export type RootState = ReturnType<typeof appReducer>;
