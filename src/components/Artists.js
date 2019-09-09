import React, {useState} from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import {useQuery} from '@apollo/react-hooks';
import * as R from 'ramda'
import {Loading, Error} from './utils'
import {MediaCard} from './MediaCard'

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

const Artist = ({id, image, name}) => (
  <MediaCard image = {image} title = {name} content = "Artist" /> 
  // <div key={id} className="card" style={{'width': '100%', 'marginTop': '10px'}}>
  //     <div className="card-body">
  //         <h5 className="card-title">{name}</h5>
  //         <h6 className="card-subtitle mb-2 text-muted">{id}</h6>
  //         <img src={image} alt="new" />
  //     </div>
  // </div>
)

const Artists = R.map(Artist)

const bla = (component, prop) => R.pipe(R.path(['data', prop]), component)


const ArtistsResponse = R.cond([
  [R.prop('loading'), Loading],
  [R.prop('error'), Error],
  [R.T, R.pipe(R.path(['data', 'artists']), Artists)]
]);

const ArtistsQuery = ({artistFilter}) => {
  const queryResult = useQuery(GET_ARTIST_QUERY, {
    variables: {artistFilter}
  });
  
  return <div>{
    ArtistsResponse(queryResult)
  }</div>
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