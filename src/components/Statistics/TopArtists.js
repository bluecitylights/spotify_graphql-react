import gql from "graphql-tag";
import {useQuery} from '@apollo/react-hooks';
import * as R from 'ramda'
import {Loading, Error} from '../Utils/utils'
import {Artists} from '../Artists/Artists'

const GET_TOP_ARTISTS = gql`
query {
  me {
    stats {
      topArtists {
        id
        name
        image
			}
    }
	}
}

`;

const QueryResponse = R.cond([
    [R.prop('loading'), Loading],
    [R.prop('error'), Error],
    [R.T, R.pipe(R.path(['data', 'me', 'stats', 'topArtists']), Artists)]
  ]);

const TopArtistsQuery = () => {
    const queryResult = useQuery(GET_TOP_ARTISTS);
    
    return QueryResponse(queryResult)
  };

const TopArtists = TopArtistsQuery


export {TopArtists, GET_TOP_ARTISTS}
