import React from 'react'
import { storiesOf } from '@storybook/react'
import {Player, GET_CURRENT_TRACK} from './Player'

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
    }
];

const withMockCurrent = withMocks(mocks)

storiesOf('Player', module)
.addDecorator(withMockCurrent)  
.add('Player', () => (
      <Player />
  ))
