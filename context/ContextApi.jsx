import { createContext, useContext, useState } from "react";

export const AppContext = createContext({});

const ContextProvider = ({ children }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  //toogles password visibility to hidden and show
  const handlePress = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <AppContext.Provider value={{ passwordVisible, handlePress }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default ContextProvider;
