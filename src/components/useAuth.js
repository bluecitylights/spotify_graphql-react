// Hook (use-auth.js)
import React, { useState, useEffect, useContext, createContext } from "react";
import gql from "graphql-tag";
import {useQuery, useApolloClient} from '@apollo/react-hooks';
import {useLocalStorage} from './useLocalStorage'

const authContext = createContext();

// Provider component that wraps your app and makes auth object ...
// ... available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object ...
// ... and re-render when it changes.
export const useAuth = () => {
  return useContext(authContext);
};


// Provider hook that creates auth object and handles state
function useProvideAuth() {
  const [user, setUser] = useLocalStorage('sp_user', null);
  
  const signin = async (token) => {
    const user = {
        token
    };
    setUser(user);
    return user;
  };

  const signout = () => {
    setUser(null);
    window.location = "http://localhost:3000"; // todo
    return null;
  };

  // Return the user object and auth methods
  return {
    user,
    signin,
    signout
  };
}