import React, { useContext, createContext } from "react";
import {useSessionStorage} from './useStorage'

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
  const [user, setUser] = useSessionStorage('sp_user', null);
  
  const signin = async (token) => {
    const user = {
        token
    };
    setUser(user);
    return user;
  };

  const signout = () => {
    setUser(null);

    window.location = `${window.location.origin.toString()}`; 
    return null;
  };

  // Return the user object and auth methods
  return {
    user,
    signin,
    signout
  };
}