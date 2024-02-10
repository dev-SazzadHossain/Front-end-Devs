import { useQuery } from "@tanstack/react-query";
import React, { createContext } from "react";
import { AxiosInstance } from "../utils/AxiosInstance";
export const AuthContext = createContext();
const loadUsers = async () => {
  try {
    const response = await AxiosInstance.get("/users");
    return response.data;
  } catch (error) {
    console.log(error?.message);
  }
};
const Context = ({ children }) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: "users",
    queryFn: loadUsers,
  });
  const authInfo = { data, isLoading, isError, error };
  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
};

export default Context;
