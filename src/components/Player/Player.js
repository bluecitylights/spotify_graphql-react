import React from 'react'
import {useQuery} from '@apollo/react-hooks';
import gql from "graphql-tag";
import {MediaControlCard} from './MediaControlCard'
import {Loading, Error} from '../Utils/utils'
import * as R from 'ramda'

const GET_CURRENT_TRACK = gql`
    query {
        me {
            player {
                current {
                    name
                    artists {
                        name
                    }
                }
            }
        }
    }

`;

const Player = () => {
    const queryResult = useQuery(GET_CURRENT_TRACK);

    if (queryResult.loading) return (<Loading />)
    if (queryResult.error) return (<Error />)
    return (
        <MediaControlCard image="/spotify_green.jpg" title={queryResult.data.me.player.current.name} artists={queryResult.data.me.player.current.artists}/>
    )
}

export {Player, GET_CURRENT_TRACK}
