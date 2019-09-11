import React from 'react'
import { storiesOf } from '@storybook/react'
import {GET_MY_PLAYLISTS, MyPlaylists} from './MyPlaylists'
import {withMocks} from '../withMocks'

const mocks = [{
  request: {
    query: GET_MY_PLAYLISTS
  },
  result: {
    data: {
      me: {
        playlists: [
          { id: '1', name: 'Black Magic', image: "/spotify_green.jpg" },
          { id: '2', name: 'Hip Hop Be Bop', image: "/spotify_grey.png" }
        ]
      }
    },
  },
}]

const withPlaylistsMocks = withMocks(mocks);

storiesOf('MyPlaylists', module)
  .addDecorator(withPlaylistsMocks)
  .add('MyPlaylists', () => (<MyPlaylists/>))



