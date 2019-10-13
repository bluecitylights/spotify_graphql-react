import React from 'react';
import gql from "graphql-tag";
import {useQuery} from '@apollo/react-hooks';
import * as R from 'ramda'
import {Loading, Error} from '../Utils/utils'
import {MediaCard} from '../MediaCard'
import {navigate} from 'hookrouter'


const GET_RECENT_SONGS = gql`
query {
  me {
    player {
      recent {
        id
        name
        image
        artists {
          id
          name
        }
			}
    }
	}
}

`;

const Track = ({id, name, image, artists}) => {
  const onPlay = () => {
    navigate(`/player/spotify:track:${id}`)
  }
  return(
  <MediaCard image={image} title = {name} content = {R.pluck("name")(artists)} play = {onPlay}/> 
  )
}
  
const Tracks = R.map(Track)
  
const QueryResponse = R.cond([
    [R.prop('loading'), Loading],
    [R.prop('error'), Error],
    [R.T, R.pipe(R.path(['data', 'me', 'player', 'recent']), Tracks)]
  ]);

const RecentQuery = () => {
    const queryResult = useQuery(GET_RECENT_SONGS);
    
    return QueryResponse(queryResult)
  };

const Recent = RecentQuery


export {Recent, RecentQuery, GET_RECENT_SONGS, Track, Tracks}
