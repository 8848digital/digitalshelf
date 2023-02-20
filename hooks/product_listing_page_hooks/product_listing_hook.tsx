import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MissingParts from "../../services/api/product_listing_api/missing_parts_api";
import { CONSTANTS } from "../../services/config/api-config";
import {
  FilterApi,
  filters_state,
} from "../../store/slices/product_listing_slice/filter_slice";
import {
  ProductListingApi,
  product_state,
} from "../../store/slices/product_listing_slice/product_listing_slice";
// import {useNavigate} from "react-router-dom";

export const useProductListing = (searchVal?: any) => {
  let [filtersData, setfiltersData] = useState<any>([]);
  let [listItems, setlistItems] = useState<any>([]);
  const [search, setSearch] = useState(false);
  const [globalSearch, setGlobalSearch] = useState<any>("");
  const [searchResultNotFound, setSearchResultNotFound] = useState(false);

  const shanPartsMultiSearchInitialValues = {
    oemNo: "",
    itemName: "",
    modelNo: "",
  };

  const [shanPartsSearch, setShanPartsSearch] = useState(
    shanPartsMultiSearchInitialValues
  );
  const [price, setprice] = useState<string>("low_to_high");
  const [pageNo, setpageNo] = useState<number>(1);
  const dispatch = useDispatch();
  const { query } = useRouter();
  const router = useRouter();

  let [filters, setFilters] = useState<any>([]);

  const products: any = useSelector(product_state);
  const filterState = useSelector(filters_state);

  let product_count = products.total_count;
  console.log("product count from hook ", products);

  const handlePagination = () => {
    console.log("in pagination");
    setpageNo(pageNo + 1);
    // console.log("in pagination", products.items)
  };
  const handlePrice = (e: any) => {
    setprice(e.target.value);
  };

  console.log("query ", products);

  useEffect(() => {
    dispatch(FilterApi(query));
  }, [query]);

  useEffect(() => {
    if (
      typeof filterState === "undefined" ||
      Object.keys(filterState).length === 0 ||
      typeof filterState.filters === "undefined"
    ) {
      console.log("filters are not there");
      setfiltersData([]);
    } else {
      setfiltersData(filterState.filters.filters);
    }
  }, [filterState, query]);

  let [productCount, setProductCount] = useState({
    value: product_count - 8,
    setValue: (newValue: any) => {
      setProductCount({ ...productCount, value: newValue });
    },
  });

  const isLoadMore = (newValue: any) => {
    setProductCount({ ...productCount, value: newValue });
  };
  useEffect(() => {
    setProductCount({ ...productCount, value: product_count });
  }, [product_count, price, filters]);

  const handleChange = (e: any, brand?: any, vals?: any) => {
    console.log("///////******//////", e.target.checked, e.target, vals);

    let { checked, value } = e.target;
    // initialize the value and pushed it to the object value array
    if (filters.length === 0 && checked) {
      let data = {
        name: brand,
        value: [value],
      };
      setFilters((filters = [...filters, data]));
      // console.log("8848 sns filters", filters)
    }
    /// delete the values from the value array from the existing object array
    if (!checked) {
      filters.map((filter: any, index: any) => {
        /// values are getting remove from object value array based on the checked state and availability of the value in
        if (filter.name === brand && filters[index].value.includes(value)) {
          let updateFilterList = {
            name: filter.name,
            value: filter.value.filter((val: any) => val !== value),
          };

          /// this is the filter assignment for a particular index
          filters[index] = updateFilterList;
        }
      });
    }

    /// if filter.name already in the object array want to append new entry
    filters.map((filter: any, index: any) => {
      /// this if block filter is for the removal of empty value array
      if (filter.name === brand && filters[index].value.length === 0) {
        setFilters(
          (filters = filters.filter((val: any) => val.name !== brand))
        );
      }
      /// this if block is for the appending the value in the value array
      if (filter.name === brand && checked && !filter.value.includes(value)) {
        let updateFilter = {
          name: filter.name,
          value: [...filter.value, value],
        };
        filters[index] = updateFilter;
      } else {
        /// this else is for if the brand name is not in the filters array this else create the new object in the filters array
        let isSome = filters.some((element: any) => {
          if (element.name === brand) {
            return true;
          }
          return false;
        });
        if (!isSome && checked) {
          let newData = {
            name: brand,
            value: [value],
          };
          setFilters((filters = [...filters, newData]));
        }
      }
    });
    setpageNo(1);
    if (price && filters) {
      dispatch(ProductListingApi(pageNo, query, price, filters));
    } else {
      dispatch(ProductListingApi(pageNo, query, price, filters));
    }
  };

  const handleClearFilter = () => {
    setFilters([]);
    document
      .querySelectorAll('input[type="checkbox"]')
      .forEach((el: any) => (el.checked = false));
    dispatch(ProductListingApi(pageNo, query, price));
  };

  // if filter is selected than than call the api with filter and page no 1 else if price
  // useEffect(() => {
  //   setpageNo(1);
  //   // console.log("filter is defined low_to_high", price ? "low_to_high": "high_to_low", filters)
  //   if (filters) {
  //     dispatch(ProductListingApi(pageNo, query, price, filters));
  //   } else {
  //     dispatch(ProductListingApi(pageNo, query, price));
  //   }
  // }, [price]);

  // ":K --- Previous code , changed code above[this code is working on changes of sub and sub sub category]"
  useEffect(() => {
    console.log("search value", globalSearch);
    console.log("search query", query);
    setpageNo(1);
    if(query.search !== "")
    {
        dispatch(ProductListingApi(pageNo, query, price, filters, query.search));
        setGlobalSearch("");
    }
    console.log("filter is defined low_to_high", price ? "low_to_high": "high_to_low", filters)
    if (filters) {
      console.log("product listing query hook", query);
      console.log("product listing query hook with filters", filters);
      dispatch(ProductListingApi(pageNo, query, price, filters));
    } else {
      console.log("product listing query hook", query);
      dispatch(ProductListingApi(pageNo, query, price));
    }
  }, [query, price]);

  useEffect(() => {
    console.log("page no");

    if(pageNo !== 1 )
    {
      if (filters) {
        dispatch(ProductListingApi(pageNo, query, price, filters));
      } else {
        dispatch(ProductListingApi(pageNo, query, price));
      }
    }
  }, [pageNo]);

  // useEffect(()=>
  // {
  //   console.log("search value", globalSearch);
  //   if(globalSearch !== "")
  //   {
  //     dispatch(ProductListingApi(pageNo, query, price, filters, globalSearch));
  //   }
  // },[globalSearch])

  const handleSearch = () => {
    router.push(`/pl?search=${globalSearch}`);
    setSearch(false);
    setSearchResultNotFound(!searchResultNotFound);
    // console.log("/////*****///// global Search before set", globalSearch);
    // setTimeout(() => {
    //   dispatch(ProductListingApi(pageNo, query, price, filters, globalSearch));
    // }, 1500);
    // console.log("/////*****///// global Search after set", globalSearch);
    // setsearchVal("");
  };

  const handleMultiSearch = (e: any) => {
    const { name, value } = e.target;
    console.log("shan parts search val name", name);
    console.log("shan parts search val value", value);

    setShanPartsSearch({
      ...shanPartsSearch,
      [name]: value,
    });
  };

  const handleMultiSearchSubmit = () => {
    router.push("/pl");
    setSearchResultNotFound(!searchResultNotFound);
    setTimeout(() => {
      dispatch(
        ProductListingApi(
          pageNo,
          query,
          price,
          filters,
          `${shanPartsSearch.oemNo} ${shanPartsSearch.itemName} ${shanPartsSearch.modelNo}`
        )
      );
    }, 1500);
  };
  // useEffect(() => {
  //   console.log("/////*****///// global Search after useEffect", globalSearch)
  // },[search])

  useEffect(() => {
    console.log("product listing set data", products);
    if (pageNo === 1) {
      console.log("inside page no 1");
      console.log("product listing set data", products);
      setlistItems(products.items);
      if (products?.items !== undefined) {
        if (products?.items?.length === 0 && searchResultNotFound === true) {
          const SearchItemNotFoundAPI = async () => {

            if(CONSTANTS.ENABLE_PRODUCT_ENQUIRY_FEATURE)
            {
              // MissingParts function parameter is the state variable in which we are storing search query data.
              // Change function parameter according to your need.
              const missingPartsApiRes = await MissingParts(shanPartsSearch);
              console.log(
                "in missing parts api response in hook",
                missingPartsApiRes
              );
              setSearchResultNotFound(!searchResultNotFound);
            }
          };

          SearchItemNotFoundAPI();
        }
        setShanPartsSearch(shanPartsMultiSearchInitialValues);
      }
      // if(searchResultNotFound === true)
      // {

      // }
      // setlistItems((listItems = [...listItems, ...products.items]));
    } else if (listItems.length <= product_count) {
      setlistItems((listItems = [...listItems, ...products.items]));
      setShanPartsSearch(shanPartsMultiSearchInitialValues);
    }
  }, [products]);

  return {
    listItems,
    handlePagination,
    handlePrice,
    price,
    filtersData,
    product_count,
    handleChange,
    productCount,
    setProductCount,
    filters,
    isLoadMore,
    search,
    setSearch,
    globalSearch,
    setGlobalSearch,
    shanPartsSearch,
    setShanPartsSearch,
    handleSearch,
    handleMultiSearch,
    handleMultiSearchSubmit,
    handleClearFilter,
  };
};
