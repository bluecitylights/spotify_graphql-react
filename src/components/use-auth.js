// Hook (use-auth.js)
import React, { useState, useEffect, useContext, createContext } from "react";
import gql from "graphql-tag";
import {useQuery, useApolloClient} from '@apollo/react-hooks';


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
  const [user, setUser] = useState(null);
  
  // Wrap any Firebase methods we want to use making sure ...
  // ... to save the user to state.
  const signin = async (token) => {
    // const data = await fetch(/*process.env.REACT_APP_SPOTIFY_ANALYZER_LOGIN+*/"http://localhost:4000/login?client_redirect_uri=http://localhost:3000");
    // const json = data.json();
    // console.log('sign in');
    // console.log(json);
    
    // const url = process.env.REACT_APP_SPOTIFY_ANALYZER_LOGIN;
    // const res = await fetch(url);   
    //const token = "1234"
    
    const user = {
        token,
        email: "test@pointlogic.com"
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