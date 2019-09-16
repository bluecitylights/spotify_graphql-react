import React from 'react'
import { storiesOf } from '@storybook/react'
import {Player, GET_CURRENT_TRACK, SET_NEXT_TRACK} from './Player'

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
            name: "Revival 80s",
            artists: [
              {
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
