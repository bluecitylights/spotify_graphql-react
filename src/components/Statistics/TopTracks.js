import gql from "graphql-tag";
import {useQuery} from '@apollo/react-hooks';
import * as R from 'ramda'
import {Loading, Error} from '../Utils/utils'
import {Tracks} from '../Recent/Recent'

const GET_TOP_SONGS = gql`
query {
  me {
    stats {
      topTracks {
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

const QueryResponse = R.cond([
    [R.prop('loading'), Loading],
    [R.prop('error'), Error],
    [R.T, R.pipe(R.path(['data', 'me', 'stats', 'topTracks']), Tracks)]
  ]);

const TopSongsQuery = () => {
    const queryResult = useQuery(GET_TOP_SONGS);
    
    return QueryResponse(queryResult)
  };

const TopTracks = TopSongsQuery


export {TopTracks, GET_TOP_SONGS}
