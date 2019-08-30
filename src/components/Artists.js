import React, {useState} from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import {useQuery} from '@apollo/react-hooks';
import * as R from 'ramda'
import {Loading, Error} from './utils'

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

const Artist = artist => (
  <div key={artist.id} className="card" style={{'width': '100%', 'marginTop': '10px'}}>
      <div className="card-body">
          <h5 className="card-title">{artist.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{artist.id}</h6>
          <img src={artist.image} alt="new" />
      </div>
  </div>
)

const Artists = R.map(Artist)

const bla = (component, prop) => R.pipe(R.path(['data', prop]), component)


const ArtistsResponse = R.cond([
  [R.prop('loading'), Loading],
  [R.prop('error'), Error],
  [R.T, R.pipe(R.path(['data', 'artists']), Artists)]
]);

const ArtistsQuery = ({artistFilter}) => {
  const queryResult = useQuery(QUERY, {
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

export {Artist, Artists, ArtistSearch}

export default ArtistSearch;