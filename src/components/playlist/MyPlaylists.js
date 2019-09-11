import React, {useState} from 'react';
import gql from "graphql-tag";
import {useQuery} from '@apollo/react-hooks';
import * as R from 'ramda'
import {Loading, Error} from '../Utils/utils'
import {Playlists} from './Playlists'

const GET_MY_PLAYLISTS = gql`
query {
  me {
    playlists {
      name
      image
    }
	}
}

`;

const QueryResponse = R.cond([
    [R.prop('loading'), Loading],
    [R.prop('error'), Error],
    [R.T, R.pipe(R.path(['data', 'me', 'playlists']), Playlists)]
  ]);

const PlaylistQuery = () => {
    const queryResult = useQuery(GET_MY_PLAYLISTS);
    
    return QueryResponse(queryResult)
  };

const MyPlaylists = PlaylistQuery


export {MyPlaylists, GET_MY_PLAYLISTS}
