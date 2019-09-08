import React from 'react'
import { storiesOf } from '@storybook/react'

import {Artist, Artists, ArtistsResponse} from './Artists'

storiesOf('Artist', module)
    .add('artist', () => (
        <Artist id="1234" image="/favicon.ico" name="robin s"/>
    ))

// storiesOf('Artists', module)
//     .add('artists', () => (
//         <Artists />
//     ))

// storiesOf('ArtistsResponse', module)
//     .add('ArtistsResponse', () => (
//         <ArtistsResponse />
//     ))