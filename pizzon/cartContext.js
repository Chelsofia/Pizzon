"use client"
import { createContext, useContext, useState } from "react";
import { productsArray, getProductData } from "./app/components/pizzaData";


export const cartContext = createContext();

export function AppProvider({ children }) {
  const [data, setData] = useState([]);

  return (
    <cartContext.Provider value={{ data, setData }}>
      {children}
    </cartContext.Provider>
  );
}