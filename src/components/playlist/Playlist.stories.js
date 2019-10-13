import React from 'react'
import { storiesOf } from '@storybook/react'
import {GET_PLAYLISTS_BY_ID, Playlists, Playlist, PlaylistQuery} from './Playlists'
import {withMocks} from '../withMocks'

const mocks = [{
  request: {
    query: GET_PLAYLISTS_BY_ID,
    variables: {
      playlistids: ["1", "2"],
    }
  },
  result: {
    data: {
      playlists: [
        { id: '1', name: 'Black Magic', image: "/spotify_green.jpg", description: "this is playlist 1" },
        { id: '2', name: 'Hip Hop Be Bop', image: "/spotify_grey.png", description: null}
      ]
    },
  },
}]

const withPlaylistsMocks = withMocks(mocks);

storiesOf('PlaylistQuery', module)
  .addDecorator(withPlaylistsMocks)
  .add('PlaylistQuery', () => (<PlaylistQuery playlistids={["1", "2"]}/>))

storiesOf('Playlists', module)
  .add('Playlists', () => Playlists(mocks[0].result.data.playlists))

storiesOf('Playlist', module)
  .add('Playlist', () => <Playlist id="1" name="Black Magic" image="/spotify_green.jpg" />)


