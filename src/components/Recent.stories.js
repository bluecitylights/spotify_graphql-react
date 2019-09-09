import React from 'react'
import { storiesOf } from '@storybook/react'
import {Track, Recent, RecentQuery, GET_RECENT_SONGS, SearchResults} from './Recent'
import {withMocks} from './withMocks'
import * as R from 'ramda'


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
                artists: [
                  {
                    name: "Mutant Beat Dance"
                  }
                ]
              },
              {
                name: "186 Halin' (Loving Myself Mix)",
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
                artists: [
                  {
                    name: "Jayda G"
                  }
                ]
              },
              {
                name: "Phantom Dance",
                artists: [
                  {
                    name: "Mr. Mitch"
                  }
                ]
              },
              {
                name: "VYZEE",
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

  storiesOf('SearchResults', module)
    .add('SearchResults', () => SearchResults(mocks[0].result.data.me.player.recent))