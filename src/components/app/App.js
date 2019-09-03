import logo from '../../logo.svg';
import './App.css';
import React from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo';
import {OmniSearch} from '../OmniSearch'
import {MyLayout} from '../Layout/Layout'
import { ProvideAuth } from "../use-auth.js";

const client = new ApolloClient({
  uri: process.env.REACT_APP_SPOTIFY_ANALYZER_API,
  request: operation => {
    operation.setContext({
        headers: {
          Authorization: `Bearer ` + process.env.REACT_APP_SPOTIFY_USER_TOKEN
        },
    });
}
});

const App = () => (
  <ProvideAuth>
    <ApolloProvider client={client}>
      <MyLayout/>
    </ApolloProvider>
  </ProvideAuth>
);

export default App;
