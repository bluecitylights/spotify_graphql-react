import React from 'react'
import { storiesOf } from '@storybook/react'
import {Artist, Artists} from '../src/components/Artists'

import {User, NoUser, Login, Logout} from '../src/components/Layout/NavHeaderEx'

import {Loading, Error} from '../src/components/utils'

storiesOf('User', module)
    .add('without image', () => (
        <User collapsed = {true}  user = {{display_name: "Richard"}} />
    ))
    .add('with image', () => (
        <User collapsed = {true}  user = {{display_name: "Richard", image: "/favicon.ico"}} />
    ))

storiesOf('NoUser', module)
    .add('no user', () => (
        <NoUser />
    ))

storiesOf('Loading', module)
    .add('loading', () => (<Loading/>))

storiesOf('Error', module)
    .add('error', () => (<Error/>))    

storiesOf('Login', module)
    .add('login', () => (<Login/>))

storiesOf('Logout', module)
    .add('logout', () => (<Logout/>))    

storiesOf('Artist', module)
    .add('artist', () => (
        <Artist id="1234" image="/favicon.ico" name="robin s"/>
    ))

storiesOf('Artists', module)
    .add('artists', () => (
        <Artists />
    ))