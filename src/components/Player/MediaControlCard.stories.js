import React from 'react'
import { storiesOf } from '@storybook/react'
import {MediaControlCard} from './MediaControlCard'

const current = {
  name: "186 Halin' (Loving Myself Mix)",
  artists: [
    {
      name: "Jayda G"
    },
    {
      name: "Laylay"
    }
  ],
  image: "/spotify_green.jpg"
}

storiesOf('MediaControlCard', module)
  .add('MediaControlCard', () => (
      <MediaControlCard image={current.image} title={current.name} artists={current.artists}/>
  ))
