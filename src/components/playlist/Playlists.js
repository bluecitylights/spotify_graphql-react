import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Playlist from './Playlist';
import {useQuery} from '@apollo/react-hooks';

const QUERY = gql`
  query ($playlist_ids: [String]) {
    playlists(ids: $playlist_ids) {
      id
      name
      image
    }
  }
`;

const Playlists = ({ids}) => {
  const { data, error, loading } = useQuery(QUERY, {
    variables: {playlist_ids: ids}
  });
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!(</p>;
  if (!data.playlists) return <p>No data(</p>;
  const playlists = data.playlists.map((current) => (
    <Playlist playlist={current} />
  ));
  return <div>{playlists}</div>
};

export default Playlists;