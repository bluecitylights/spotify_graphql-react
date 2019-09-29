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
  image: "/spotify_green.jpg",
  progress: 30000,
  duration: 180000
}

storiesOf('MediaControlCard', module)
  .add('MediaControlCard', () => (
      <MediaControlCard track={current} />
  ))
