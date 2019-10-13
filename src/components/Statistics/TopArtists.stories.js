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
                id: "artist-1", 
                name: "Revival 80s",
                image: "/spotify_green.jpg",
                
              },
              {
                id: "artist-2", 
                name: "186 Halin' (Loving Myself Mix)",
                image: "/spotify_green.jpg",
                
              },
              {
                id: "artist-3", 
                name: "Move to the Front (Disco Mix) - Edit",
                image: "/spotify_green.jpg",
                
              },
              {
                id: "artist-4", 
                name: "Phantom Dance",
                image: "/spotify_green.jpg",
                
              },
              {
                id: "artist-5", 
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


