import React from 'react'
import { storiesOf } from '@storybook/react'
import {Player} from './Player'
import {GET_CURRENT_TRACK, SET_NEXT_TRACK} from './usePlayer'
import {withMocks} from '../withMocks'

const mocks = [{
  request: {
    query: GET_CURRENT_TRACK
  },
  result: {
    data: {
      me: {
        player: {
          current: {
            id: "track-1",
            name: "Revival 80s",
            image: null,
            lyrics: "my lyrics",
            progress: 30000,
            duration: 180000,
            artists: [
              {
                id: "artist-1",
                name: "Mutant Beat Dance"
              }
            ]
          }
        }
      }
    }
  }
  },

  {
    request: {
      query: SET_NEXT_TRACK
    },
    result: {
      data: {
        me: {
          player: {
            next: {
              name: "Move to the Front (Disco Mix) - Edit",
              image: null,
              artists: [
                {
                  name: "Jayda G"
                }
              ]
            }
          }
        }
      }
    }
  }
];

const withMockCurrent = withMocks(mocks)
storiesOf('Player', module)
.addDecorator(withMockCurrent)  
.add('Player', () => (
      <Player />
  ))
