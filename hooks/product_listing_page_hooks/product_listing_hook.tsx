import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FilterApi, filters_state } from "../../store/slices/product_listing_slice/filter_slice";
import {
  ProductListingApi,
  product_state,
} from "../../store/slices/product_listing_slice/product_listing_slice";

export const useProductListing = (searchVal?: any) => {
  let [filtersData, setfiltersData] = useState<any>([]);
  let [listItems, setlistItems] = useState<any>([]);
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
  useEffect(() => {
    setpageNo(1);
    // console.log("filter is defined low_to_high", price ? "low_to_high": "high_to_low", filters)
    if (filters) {
      dispatch(ProductListingApi(pageNo, query, price, filters));
    } else {
      dispatch(ProductListingApi(pageNo, query, price));
    }
  }, [price]);

  // ":K --- Previous code , changed code above"
  // useEffect(() => {
  //   setpageNo(1);
  //   // console.log("filter is defined low_to_high", price ? "low_to_high": "high_to_low", filters)
  //   if (filters) {
  //     dispatch(ProductListingApi(pageNo, query, price, filters));
  //   } else {
  //     dispatch(ProductListingApi(pageNo, query, price));
  //   }
  // }, [query, price]);

  useEffect(() => {
    if (filters) {
      dispatch(ProductListingApi(pageNo, query, price, filters));
    } else {
      dispatch(ProductListingApi(pageNo, query, price));
    }
  }, [pageNo]);

  const [search, setSearch] = useState(false);
  const [globalSearch, setGlobalSearch] = useState<any>("");

  const handleSearch = () => {
    router.push("/pl");
    setSearch(false);
    console.log("/////*****///// global Search before set", globalSearch);
    dispatch(ProductListingApi(pageNo, query, price, filters, globalSearch));
    console.log("/////*****///// global Search after set", globalSearch);
    // setsearchVal("");
  };
  // useEffect(() => {
  //   console.log("/////*****///// global Search after useEffect", globalSearch)
  // },[search])

  useEffect(() => {
    console.log("/////*****/////product listing count", products);
    if (pageNo === 1) {
      console.log("/////*****/////product listing count", products);
      setlistItems(products.items);
      // setlistItems((listItems = [...listItems, ...products.items]));
    } else if (listItems.length <= product_count) {
      setlistItems((listItems = [...listItems, ...products.items]));
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
    handleSearch,
    handleClearFilter,
  };
};
