import React from 'react'
import { storiesOf } from '@storybook/react'
import {MediaCard} from './MediaCard'

storiesOf('MediaCard', module)
  .add('MediaCard', () => (
      <MediaCard image="/spotify_green.jpg" title="Title" content="Content"/>
  ))
