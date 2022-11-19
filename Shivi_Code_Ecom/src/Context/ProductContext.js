import { createContext, useContext, useEffect } from "react";
import axios from "axios";
import { useReducer } from "react";
import reducer from "../Reducer/ProductReducer"

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";
const initialstate = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts:[],
}

const AppProvider = ({ children }) => {
        const[ state,dispatch ]= useReducer(reducer, initialstate)
  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING"});
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "MY_API_DATA", payload: products });
    } catch (error) {
        dispatch({ type: " API_ERROR"})
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };