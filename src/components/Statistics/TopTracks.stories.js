import React from 'react'
import { storiesOf } from '@storybook/react'
import {TopTracks, GET_TOP_SONGS} from './TopTracks'
import {withMocks} from '../withMocks'

const mocks = [{
  request: {
    query: GET_TOP_SONGS
  },
  result: {
    data: {
        me: {
          stats: {
            topTracks: [
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

const withMockTopTracks = withMocks(mocks)

storiesOf('TopTracks', module)
  .addDecorator(withMockTopTracks)  
  .add('TopTracks', () => (<TopTracks/>))


