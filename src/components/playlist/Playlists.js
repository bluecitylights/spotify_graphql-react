import React from 'react';
import gql from "graphql-tag";
import {useQuery} from '@apollo/react-hooks';
import * as R from 'ramda'
import {Loading, Error} from '../Utils/utils'
import {MediaCard} from '../MediaCard'

const GET_PLAYLISTS_BY_ID = gql`
query playlists($playlistids: [String]) {
  playlists (ids: $playlistids) {
    name
    image
  }
}

`;

const Playlist = ({id, name, image}) => (
  <MediaCard image = {image} title = {name} content = {name}/> 
  )
  
const Playlists = R.map(Playlist)
  
const QueryResponse = R.cond([
    [R.prop('loading'), Loading],
    [R.prop('error'), Error],
    [R.T, R.pipe(R.path(['data', 'playlists']), Playlists)]
  ]);

const PlaylistQuery = ({playlistids}) => {
  const queryResult = useQuery(GET_PLAYLISTS_BY_ID, {
    variables: {playlistids}
  });
  
  return QueryResponse(queryResult)
};

export {GET_PLAYLISTS_BY_ID, Playlists, Playlist, PlaylistQuery}