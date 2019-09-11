import React, {useState} from 'react';
import gql from "graphql-tag";
import {useQuery} from '@apollo/react-hooks';
import * as R from 'ramda'
import {Loading, Error} from './Utils/utils'
import {MediaCard} from './MediaCard'


const GET_PLAYLISTS_BY_ID = gql`
query playlists($playlists: [String]) {
  playlists (ids: $playlists) {
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


  const pointlogic_playlist_ids = [
    "spotify:playlist:5Mys5174T3rwG2Wn0e8mge", // 2019
    "spotify:playlist:7JW4hoHrl4oMngDD82k2tE", // September 2019
    "spotify:playlist:2mYGFjyXH00sxIFOhfIBZ2", // August 2019
    "spotify:playlist:2p4PGnQyvoOw9NjJAY1uIC", // July 2019
    "spotify:playlist:0cxweUp9hijeHkzhrdRsUT", // June 2019
    "spotify:playlist:6KQBAJBp3DgLjTVSO4nG8H", // May 2019
    "spotify:playlist:3ECt4W2lLvMI9igd9fLxzo", // April 2019
    "spotify:playlist:7DL8bJMmq48pp22la2P62c", // Anniversary Edition 2019
    "spotify:playlist:3oGl63aMwkWTEGrUsWTGCJ", // Februari 2019
    "spotify:playlist:2qMXlG8g2V40rkyXgXElso", // Januari 2019
    "spotify:playlist:2OKgRlSCXWc5l6uZovpCQV", // 2018
    "spotify:playlist:7qyTk6Jx28LLTgPc0Krlv9", // El Bonus Track 3
    "spotify:playlist:0jZcenHKAADvLfH1mkHES1", // El Bonus Track 2
    "spotify:playlist:0s3aARtWRAROZl4SBvOiE1", // El Bonus Track 1
    "spotify:playlist:4I55hMRADnJCWo8LDkJOIl", // December 2018
    "spotify:playlist:5SFN9pkp3z08DGic7EIAaf", // November 2018
    "spotify:playlist:3wEgcNtRNw3xebl8qpO0Rj", // October 2018
    "spotify:playlist:10H4fyEPO57nZVkoenC1ge", // September 2018
    "spotify:playlist:1lxMVUsqicpp4X7IMwXnRm", // August 2018
    "spotify:playlist:6eDPyGhgxF0ius3v3b6j2F", // July 2018
    "spotify:playlist:2oMeHAyYesiojzX0O5ZR90", // June 2018
    "spotify:playlist:4qkS98UfeuNJ9RcVmw0Zp6", // May 2018
    "spotify:playlist:7kUGWUbDtqr31KNWpZMMmq", // April 2018
  ]
  
  const PlaylistQuery = ({playlists}) => {
      const queryResult = useQuery(GET_PLAYLISTS_BY_ID, {
        variables: {playlists}
      });
      
      return QueryResponse(queryResult)
    };
  
  const pickId = s => s.substring(17)
  
  const Pointlogic = () => <PlaylistQuery playlists={R.map(pickId, pointlogic_playlist_ids)} />


export {Pointlogic, GET_PLAYLISTS_BY_ID, Playlists, Playlist, PlaylistQuery}
