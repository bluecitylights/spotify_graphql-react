import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo';
import Artists from '../artist/Artists';


const client = new ApolloClient({
  uri: "https://spotify-analyzer-qenojzqfxa-ew.a.run.app/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <div className="container">
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand" href="#">React and GraphQL - Sample Application</a>
      </nav>
      <div>
        <Artists />
      </div>
    </div>
  </ApolloProvider>
);

export default App;