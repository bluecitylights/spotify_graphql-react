import {useQuery, useMutation} from '@apollo/react-hooks';
import {useState, useEffect} from 'react'
import gql from "graphql-tag";
import {useInterval} from '../useInterval'

const GET_CURRENT_TRACK = gql`
    query {
        me {
            player {
                current {
                    id
                    name
                    image
                    duration
                    progress
                    artists {
                        id
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
            id
            name
            image
            artists {
                id
                name
            }
        }
    }
`;

const SET_PREVIOUS_TRACK = gql`
    mutation {
        previous {
            id
            name
            image
            artists {
                id
                name
            }
        }
    }
`;


const PLAY = gql`
    mutation play($playContext: PlayContext){
        play(playContext: $playContext) {
            id
            name
            image
            artists {
                id
                name
            }
        }
    }
`;

const PAUSE = gql`
    mutation {
        pause {
            id
            name
            image
            artists {
                id
                name
            }
        }
    }
`;

const usePlayer = () => {
    const POLLING_DELAY = 10000
    const [setNextTrack, { loading: nextLoading, error: nextError }] = useMutation(SET_NEXT_TRACK)
    const [setPreviousTrack, { loading: previousLoading, error: previousError }] = useMutation(SET_PREVIOUS_TRACK)
    const [setPause, { loading: pauseLoading, error: pauseError }] = useMutation(PAUSE)
    const [setPlay, { loading: playLoading, error: playError }] = useMutation(PLAY)
    const {data, loading: currentLoading, error: currentError, stopPolling, startPolling} = useQuery(GET_CURRENT_TRACK, {pollInterval: POLLING_DELAY})
    const [progress, setProgress] = useState(() => data ? data.me.player.progress : 0);

    // use interval to keep updating the songs progress, in between succesive calls to 
    // get_current_track query
    useInterval(() => {
        setProgress(progress + 1000);
    }, 1000);

    useEffect(() => {
        data ? setProgress(data.me.player.current.progress) : setProgress(0)
    }, [data])

    const handleNext = (event) => {
        stopPolling()
        setNextTrack({
            refetchQueries: [{
                query: GET_CURRENT_TRACK
            }]
        }).then(() => startPolling(POLLING_DELAY))
    }
    const handlePrevious = (event) => {
        stopPolling()
        setPreviousTrack({
            refetchQueries: [{
                query: GET_CURRENT_TRACK
            }]
        }).then(() => startPolling(POLLING_DELAY))
    }

    const handlePlay = (playContext) => {
        stopPolling()
        setPlay({
            variables: {
                playContext
            },
            refetchQueries: [{
                 query: GET_CURRENT_TRACK
            }]
        }).then(() => startPolling(POLLING_DELAY))
    }

    const handlePause = (event) => {
        stopPolling()
        setPause()
    }

    let loading = currentLoading || nextLoading || previousLoading || pauseLoading || playLoading;
    let error = currentError || nextError || previousError || pauseError || playError;
    
    let current = data ? {...data.me.player.current, progress: progress} : null
    return {
        current,
        handleNext,
        handlePrevious,
        handlePlay,
        handlePause,
        loading,
        error
    }
}

export {usePlayer, GET_CURRENT_TRACK, SET_NEXT_TRACK, SET_PREVIOUS_TRACK, PAUSE, PLAY}