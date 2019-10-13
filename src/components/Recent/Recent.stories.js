import React from 'react'
import { storiesOf } from '@storybook/react'
import {Track, RecentQuery, GET_RECENT_SONGS, Tracks} from './Recent'
import {withMocks} from '../withMocks'

const mocks = [{
  request: {
    query: GET_RECENT_SONGS
  },
  result: {
    data: {
        me: {
          player: {
            recent: [
              {
                id: "track-1",
                name: "Revival 80s",
                image: "/spotify_green.jpg",
                artists: [
                  {
                    id: "artist-1", 
                    name: "Mutant Beat Dance"
                  }
                ]
              },
              {
                id: "track-2",
                name: "186 Halin' (Loving Myself Mix)",
                image: "/spotify_green.jpg",
                artists: [
                  {
                    id: "artist-2", 
                    name: "Jayda G"
                  },
                  {
                    id: "artist-3", 
                    name: "Laylay"
                  }
                ]
              },
              {
                id: "track-3",
                name: "Move to the Front (Disco Mix) - Edit",
                image: "/spotify_green.jpg",
                artists: [
                  {
                    id: "artist-4", 
                    name: "Jayda G"
                  }
                ]
              },
              {
                id: "track-4",
                name: "Phantom Dance",
                image: "/spotify_green.jpg",
                artists: [
                  {
                    id: "artist-5", 
                    name: "Mr. Mitch"
                  }
                ]
              },
              {
                id: "track-5",
                name: "VYZEE",
                image: "/spotify_green.jpg",
                artists: [
                  {
                    id: "artist-6", 
                    name: "SOPHIE"
                  }
                ]
              }
            ]
          }
        }
      }
    }
  }
];

const withMockRecent = withMocks(mocks)

storiesOf('RecentQuery', module)
  .addDecorator(withMockRecent)  
  .add('RecentQuery', () => (<RecentQuery/>))


storiesOf('Track', module)
  .add('track', () => (
      <Track id="1234" name="Revival 80s" artists={[{name:"Mutant Beat Dance"}]}/>
  ))

  storiesOf('Tracks', module)
    .add('Tracks', () => Tracks(mocks[0].result.data.me.player.recent))