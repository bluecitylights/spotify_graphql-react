import React, {useState} from 'react';
import gql from "graphql-tag";
import {useQuery} from '@apollo/react-hooks';
import * as R from 'ramda'
import {Loading, Error} from './Utils/utils'
import {Artist} from './Artists/Artists'
import {MediaCard} from './MediaCard'
import {navigate} from 'hookrouter'

const QUERY = gql`
  query search($filterText: String!) {
  search(text: $filterText) {
    __typename
    ... on Artist {
      name
      id
      image
    }

    ... on Album {
      name
      id
      image
    }

  }
}

`;

const Card = ({id, name, image, __typename}) => (
  <MediaCard image = {image} title = {name} content = "dit is een {__typename}" /> 
  )

  const Album = ({id, name, image, __typename, artists}) =>{
    const onPlay = () => {
      navigate(`/player/spotify:album:${id}`)
    }

    return (
    <MediaCard image = {image} title = {name} content = "dit is een album" play = {onPlay}/> 
  )}


const searchItemToCard = R.cond([
  [R.propEq('__typename', 'Artist'), Artist],
  [R.propEq('__typename', 'Album'), Album],
  [R.T, Card],
]);

const SearchResults = R.map(searchItemToCard)

const QueryResponse = R.cond([
  [R.prop('loading'), Loading],
  [R.prop('error'), Error],
  [R.T, R.pipe(R.path(['data', 'search']), SearchResults)]
]);

const OmniSearchQuery = ({filterText}) => {
  const queryResult = useQuery(QUERY, {
    variables: {filterText}
  });
  
  return <div>{
    QueryResponse(queryResult)
  }</div>
};

const OmniSearch = () => {
  const [filterText, setFilterText] = useState("");
  const handleFilterTextChange = event => setFilterText(event.target.value);
  return (
      <div>
          <input type="text" placeholder="Search..." value={filterText} onChange={handleFilterTextChange} />
          <OmniSearchQuery filterText = {filterText}/>
      </div>
  )
}

export {OmniSearch}
export default OmniSearch;