import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Artist from './Artist';
import {useQuery} from '@apollo/react-hooks';

const QUERY = gql`
  query artists($artistFilter: String) {
  artists(byName: $artistFilter)
  {
    id
    name
    image
  }
}
`;

const Artists = (props) => {
  const artistFilter = props.artistFilter;
  const { data, error, loading } = useQuery(QUERY, {
    variables: {artistFilter}
  });
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const artists = data.artists.map((currentArtist) => (
    <Artist artist={currentArtist} />
  ));
  return (
    <div>{artists}</div>
  )
};

export default Artists;