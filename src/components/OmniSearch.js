import React, {useState} from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import {useQuery} from '@apollo/react-hooks';
import * as R from 'ramda'
import {Loading, Error} from './utils'
import {Artist, Artists} from './Artists'

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
    <div key={id} className="card" style={{'width': '100%', 'marginTop': '10px'}}>
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{__typename}</h6>
            <img src={image} alt="new" />
        </div>
    </div>
  )


const searchItemToCard = item => item.__typename == 'Artist' ? Artist : Card

const SearchResults = R.map(Card)

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