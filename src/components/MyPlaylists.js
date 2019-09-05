import React, {useState} from 'react';
import gql from "graphql-tag";
import {useQuery} from '@apollo/react-hooks';
import * as R from 'ramda'
import {Loading, Error} from './utils'
import {MediaCard} from './MediaCard'


const QUERY = gql`
query {
  me {
    playlists {
      name
      image
    }
	}
}

`;

const Track = ({id, name, artists}) => (
        <MediaCard title = {name} content = {R.pluck("name")(artists)} /> 
    )

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
    [R.T, R.pipe(R.path(['data', 'me', 'playlists']), SearchResults)]
  ]);

const PlaylistQuery = () => {
    const queryResult = useQuery(QUERY);
    
    return <div>{
      QueryResponse(queryResult)
    }</div>
  };

const MyPlaylists = PlaylistQuery


export {MyPlaylists}