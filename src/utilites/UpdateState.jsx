/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
export const UpdateState = createContext();
export const UpdateProvider = ({ children }) => {
  const [subscribeBox, setSubscribeBox] = useState(false);
  const toggleSubscribeBoxState = () => {
    setSubscribeBox((prevBoolean) => !prevBoolean);
  };
  return (
    <UpdateState.Provider value={{ subscribeBox, toggleSubscribeBoxState }}>
      {children}
    </UpdateState.Provider>
  );
};