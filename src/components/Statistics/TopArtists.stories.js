import React from 'react'
import { storiesOf } from '@storybook/react'
import {TopArtists, GET_TOP_ARTISTS} from './TopArtists'
import {withMocks} from '../withMocks'

const mocks = [{
  request: {
    query: GET_TOP_ARTISTS
  },
  result: {
    data: {
        me: {
          stats: {
            topArtists: [
              {
                name: "Revival 80s",
                image: "/spotify_green.jpg",
                
              },
              {
                name: "186 Halin' (Loving Myself Mix)",
                image: "/spotify_green.jpg",
                
              },
              {
                name: "Move to the Front (Disco Mix) - Edit",
                image: "/spotify_green.jpg",
                
              },
              {
                name: "Phantom Dance",
                image: "/spotify_green.jpg",
                
              },
              {
                name: "VYZEE",
                image: "/spotify_green.jpg",
                
              }
            ]
          }
        }
      }
    }
  }
];

const withMockTopArtists = withMocks(mocks)

storiesOf('TopArtists', module)
  .addDecorator(withMockTopArtists)  
  .add('TopArtists', () => (<TopArtists/>))


