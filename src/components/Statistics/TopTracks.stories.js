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

const withMockTopTracks = withMocks(mocks)

storiesOf('TopTracks', module)
  .addDecorator(withMockTopTracks)  
  .add('TopTracks', () => (<TopTracks/>))


