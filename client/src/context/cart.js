import {createContext, useContext } from "react";

const CartContext = createContext();

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ myName: "FARMART" }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hooks
const useProductContext = () => {
  return useContext(CartContext);
};

export { AppProvider, CartContext, useProductContext };