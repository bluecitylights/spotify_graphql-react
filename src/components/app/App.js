import logo from '../../logo.svg';
import './App.css';
import React from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from 'react-apollo';
import PlaylistSearch from '../playlist/PlaylistSearch';
import ArtistSearch from '../Artists';
import {OmniSearch} from '../OmniSearch'

const client = new ApolloClient({
  uri: process.env.REACT_APP_SPOTIFY_ANALYZER_API
});

const App = () => (
  <ApolloProvider client={client}>
    <div className="container">
      <nav className="navbar navbar-dark bg-primary">
        <a className="navbar-brand" href="#">Spotify Analyzer</a>
      </nav>
      <div>
        <OmniSearch/>
      </div>
    </div>
  </ApolloProvider>
);

export default App;
