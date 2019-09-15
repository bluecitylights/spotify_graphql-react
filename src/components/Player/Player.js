import React from 'react'
import {useQuery, useMutation} from '@apollo/react-hooks';
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

const SET_NEXT_TRACK = gql`
    mutation {
        next {
            name
        }
    }
`;

const SET_PREVIOUS_TRACK = gql`
    mutation {
        next {
            name
        }
    }
`;


const PLAY = gql`
    mutation {
        play {
            name
        }
    }
`;

const PAUSE = gql`
    mutation {
        pause
    }
`;

// const next = (props) => {
//     const [setNextTrack, { loading, error }] = useMutation(SET_NEXT_TRACK)
//     return (
//         <div>
//             <button onClick={() => {
//                 setNextTrack().then(res => {props.refetch();})
//             }}
//             > remove star</button>
//             {loading && <p>processing...</p>}
//             {error && <p>{error.message}</p>}

//         </div>
//     )
// }


// todo: https://reactgo.com/react-hooks-apollo/

const Player = () => {
    const queryResult = useQuery(GET_CURRENT_TRACK);
    const [setNextTrack, { loading, error }] = useMutation(SET_NEXT_TRACK)
    //const [setPreviousTrack, { loading, error }] = useMutation(SET_PREVIOUS_TRACK)
    //const [play, { loading, error }] = useMutation(PLAY)
    //const [pause, { loading, error }] = useMutation(PAUSE)

    if (queryResult.loading) return (<Loading />)
    if (queryResult.error) return (<Error />)
    return (
        <MediaControlCard image="/spotify_green.jpg" title={queryResult.data.me.player.current.name} artists={queryResult.data.me.player.current.artists} next={setNextTrack} /> //previous={setPreviousTrack} play={play} pause={pause}/>
    )
}

export {Player, GET_CURRENT_TRACK}
