import React from 'react';
import logo from '../../logo.svg';
import './App.css';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo';
import ArtistSearch from '../artist/ArtistSearch';

const client = new ApolloClient({
  uri: process.env.REACT_APP_SPOTIFY_ANALYZER_API
});

const App = () => (
  <ApolloProvider client={client}>
    <div className="container">
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand" href="#">React and GraphQL - Sample Application</a>
      </nav>
      <div>
        <ArtistSearch/>
      </div>
    </div>
  </ApolloProvider>
);

export default App;
