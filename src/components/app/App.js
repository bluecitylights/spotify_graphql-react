import logo from '../../logo.svg';
import './App.css';
import React from 'react';
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from 'react-apollo';
import {MyLayout} from '../Layout/Layout'
import { ProvideAuth } from "../use-auth.js";
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';

// this doesnt work, it connectes to localhost:3000/graphql
// const httpLink = createHttpLink({
//   uri: process.env.REACT_APP_SPOTIFY_ANALYZER_API
// })

// const authLink = setContext((_,  {headers}) => {
//   const token = "";
//   return {
//     headers : {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : ""
//     }
//   }
// })

// const _client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache()  
// });


const client = new ApolloClient({
  uri: process.env.REACT_APP_SPOTIFY_ANALYZER_API,
  request: operation => {
    const user = JSON.parse(window.localStorage.getItem('sp_user'))
    operation.setContext({
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
  }
})




const App = () => {
  return (
    <ProvideAuth>
      <ApolloProvider client={client}>
        <MyLayout/>
      </ApolloProvider>
    </ProvideAuth>
    )
}

export default App;
