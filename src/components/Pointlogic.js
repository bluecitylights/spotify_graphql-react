import React, {useState} from 'react';
import gql from "graphql-tag";
import {useQuery} from '@apollo/react-hooks';
import * as R from 'ramda'
import {Loading, Error} from './utils'
import {MediaCard} from './MediaCard'


const QUERY = gql`
query playlists($playlists: [String]) {
  playlists (ids: $playlists) {
    name
    image
  }
}

`;

const Playlist = ({id, name, image, __typename}) => (
  <MediaCard image = {image} title = {name} content = {__typename} /> 
  )
  
const searchItemToCard = R.cond([
    //[R.propEq('__typename', 'Artist'), Artist],
    //[R.propEq('__typename', 'Album'), Album],
    //[R.propEq('__typename', 'Track'), Track],
    [R.propEq('__typename', 'Playlist'), Playlist],
  ]);
  
const SearchResults = R.map(searchItemToCard)
  
const QueryResponse = R.cond([
    [R.prop('loading'), Loading],
    [R.prop('error'), Error],
    [R.T, R.pipe(R.path(['data', 'playlists']), SearchResults)]
  ]);


const playlists =  [
  "2mYGFjyXH00sxIFOhfIBZ2", 
  "2p4PGnQyvoOw9NjJAY1uIC",
  "0cxweUp9hijeHkzhrdRsUT"
]

const PlaylistQuery = () => {
    const queryResult = useQuery(QUERY, {
      variables: {playlists}
    });
    
    return <div>{
      QueryResponse(queryResult)
    }</div>
  };

const Pointlogic = PlaylistQuery


export {Pointlogic}
