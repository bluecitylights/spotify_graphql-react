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

const usePlayer = () => {
    const {data, loading: currentLoading, error: currentError} = useQuery(GET_CURRENT_TRACK);
    const [setNextTrack, { loading: nextLoading, error: nextError }] = useMutation(SET_NEXT_TRACK)
    const [setPreviousTrack, { loading: previousLoading, error: previousError }] = useMutation(SET_PREVIOUS_TRACK)
    const [setPause, { loading: pauseLoading, error: pauseError }] = useMutation(PAUSE)
    const [setPlay, { loading: playLoading, error: playError }] = useMutation(PLAY)
    
    const handleNext = (event) => {
        setNextTrack({refetchQueries: [{query:GET_CURRENT_TRACK}]})
    }
    const handlePrevious = (event) => {
        setPreviousTrack({refetchQueries: [{query:GET_CURRENT_TRACK}]})
    }

    const handlePlay = (event) => {
        setPlay({refetchQueries: [{query:GET_CURRENT_TRACK}]})
    }

    const handlePause = (event) => {
        setPause({refetchQueries: [{query:GET_CURRENT_TRACK}]})
    }

    let loading = currentLoading || nextLoading || previousLoading || pauseLoading || playLoading;
    let error = currentError || nextError || previousError || pauseError || playError;
    
    return {
        data,
        handleNext,
        handlePrevious,
        handlePlay,
        handlePause,
        loading,
        error
    }
}

const Player = () => {
    const player = usePlayer();

    if (player.loading) return (<Loading />)
    if (player.error) return (<Error />)
    return (
        <MediaControlCard image="/spotify_green.jpg" title={player.data.me.player.current.name} artists={player.data.me.player.current.artists} next={player.handleNext} previous={player.handlePrevious} play={player.handlePlay} pause={player.handlePause}/>
    )
}

export {Player, GET_CURRENT_TRACK, SET_NEXT_TRACK}
