import React, {useState} from 'react';
import gql from "graphql-tag";
import {useQuery} from '@apollo/react-hooks';
import * as R from 'ramda'
import {Loading, Error} from '../Utils/utils'
import {MediaCard} from '../MediaCard'
import {navigate} from 'hookrouter'

const GET_ARTIST_QUERY = gql`
  query artists($artistFilter: String) {
  artists(byName: $artistFilter)
  {
    id
    name
    image
  }
}
`;

const Artist = ({id, image, name}) => {
  const onPlay = () => {
    navigate(`/player/spotify:artist:${id}`)
  }
  return (
  <MediaCard image = {image} title = {name} content = "Artist" play = {onPlay}/> 
)}

const Artists = R.map(Artist)

const ArtistsResponse = R.cond([
  [R.prop('loading'), Loading],
  [R.prop('error'), Error],
  [R.T, R.pipe(R.path(['data', 'artists']), Artists)]
]);

const ArtistsQuery = ({artistFilter}) => {
  const queryResult = useQuery(GET_ARTIST_QUERY, {
    variables: {artistFilter}
  });
  
  return (ArtistsResponse(queryResult))  
};

const ArtistSearch = () => {
  const [artistFilter, setArtistFilter] = useState("");
  const handleFilterTextChange = event => setArtistFilter(event.target.value);
  return (
      <div>
          <input type="text" placeholder="Search artist..." value={artistFilter} onChange={handleFilterTextChange} />
          <ArtistsQuery artistFilter = {artistFilter}/>
      </div>
  )
}

export {Artist, Artists, ArtistSearch, ArtistsQuery, GET_ARTIST_QUERY}

export default ArtistSearch;