import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Artist from './Artist';

const Artists = () => (
  <Query
    query={gql`
      {
        artists(byName: "bon jovi")
        {
          id
          name
          image
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
        return data.artists.map((currentArtist) => (
            <Artist artist={currentArtist} />
        ));
    }}
  </Query>
);
export default Artists;