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
  "5Mys5174T3rwG2Wn0e8mge", // 2019
  "2mYGFjyXH00sxIFOhfIBZ2", // Aug 2019
  "2p4PGnQyvoOw9NjJAY1uIC", // July 2019
  "0cxweUp9hijeHkzhrdRsUT", // June 2019
  "6KQBAJBp3DgLjTVSO4nG8H", // May 2019
  "3ECt4W2lLvMI9igd9fLxzo",   // April 2019
  "7DL8bJMmq48pp22la2P62c", // Anniversary Edition 2019
  "3oGl63aMwkWTEGrUsWTGCJ", //Februari 2019
  "2qMXlG8g2V40rkyXgXElso", // Januari 2019
  "2OKgRlSCXWc5l6uZovpCQV",  // 2018
  "7qyTk6Jx28LLTgPc0Krlv9", // El Bonus Track 3
  "0jZcenHKAADvLfH1mkHES1", // El Bonus Track 2
  "0s3aARtWRAROZl4SBvOiE1", // El Bonus Track 1
  "4I55hMRADnJCWo8LDkJOIl", // December 2018
  "5SFN9pkp3z08DGic7EIAaf", // November 2018
  "3wEgcNtRNw3xebl8qpO0Rj", // October 2018
  "10H4fyEPO57nZVkoenC1ge", // September 2018
  "1lxMVUsqicpp4X7IMwXnRm", // August 2018
  "6eDPyGhgxF0ius3v3b6j2F", // July 2018
  "2oMeHAyYesiojzX0O5ZR90", // June 2018
  "4qkS98UfeuNJ9RcVmw0Zp6", // May 2018
  "7kUGWUbDtqr31KNWpZMMmq", // April 2018

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
