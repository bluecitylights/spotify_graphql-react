import React from 'react'
import { storiesOf } from '@storybook/react'
import {Loading, Error} from './utils'

storiesOf('Loading', module)
    .add('loading', () => (<Loading/>))

storiesOf('Error', module)
    .add('error', () => (<Error/>))    

