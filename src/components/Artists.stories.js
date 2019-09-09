import React from 'react'
import { storiesOf } from '@storybook/react'
import {Artist, Artists, ArtistSearch, ArtistsQuery, GET_ARTIST_QUERY} from './Artists'
import {withMocks} from './withMocks'
import * as R from 'ramda'

storiesOf('Artist', module)
    .add('artist', () => (
        <Artist id="1234" image="/favicon.ico" name="robin s"/>
    ))

    const mocks = [
      {
        request: {
          query: GET_ARTIST_QUERY,
          variables: {
            artistFilter: 'Bon',
          },
        },
        result: {
          data: {
            artists: [
              { id: '1', name: 'Bon Iver', image: "/spotify_green.jpg" },
              { id: '2', name: 'Bon Jovi', image: "/spotify_grey.png" }
            ]
          },
        },
      },
      {
        request: {
          query: GET_ARTIST_QUERY,
          variables: {
            artistFilter: 'Prince',
          },
        },
        result: {
          data: {
            artists: [
              { id: '1', name: 'Prince', image: "/spotify_green.jpg" },
              { id: '2', name: 'The Fresh Prince', image: "/spotify_grey.png" }
            ]
          },
        },
      },
      
    ];
    

const withMockArtists = withMocks(mocks)

storiesOf('ArtistsQuery', module)
    .addDecorator(withMockArtists)
    .add('Search Bon', () => (
        <ArtistsQuery artistFilter="Bon"/>
    ))
    .add('Search Prince', () => (
      <ArtistsQuery artistFilter="Prince"/>
  ))
  .add('Search non existing', () => (
    <ArtistsQuery artistFilter="xxxqqqwwweee"/>
))

storiesOf('ArtistSearch', module)
    .addDecorator(withMockArtists)
    .add('ArtistSearch', () => (
        <ArtistSearch />
    ))

storiesOf('Artists', module)
    .add('Artists', () => Artists(mocks[0].result.data.artists))

