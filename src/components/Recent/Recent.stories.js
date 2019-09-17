import React from 'react'
import { storiesOf } from '@storybook/react'
import {Track, Recent, RecentQuery, GET_RECENT_SONGS, Tracks} from './Recent'
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
                name: "Revival 80s",
                image: "/spotify_green.jpg",
                artists: [
                  {
                    name: "Mutant Beat Dance"
                  }
                ]
              },
              {
                name: "186 Halin' (Loving Myself Mix)",
                image: "/spotify_green.jpg",
                artists: [
                  {
                    name: "Jayda G"
                  },
                  {
                    name: "Laylay"
                  }
                ]
              },
              {
                name: "Move to the Front (Disco Mix) - Edit",
                image: "/spotify_green.jpg",
                artists: [
                  {
                    name: "Jayda G"
                  }
                ]
              },
              {
                name: "Phantom Dance",
                image: "/spotify_green.jpg",
                artists: [
                  {
                    name: "Mr. Mitch"
                  }
                ]
              },
              {
                name: "VYZEE",
                image: "/spotify_green.jpg",
                artists: [
                  {
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