import React from 'react'
import { storiesOf } from '@storybook/react'

import {User, NoUser, Login, Logout} from './NavHeaderEx'

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

storiesOf('Login', module)
    .add('login', () => (<Login/>))

storiesOf('Logout', module)
    .add('logout', () => (<Logout/>))    

