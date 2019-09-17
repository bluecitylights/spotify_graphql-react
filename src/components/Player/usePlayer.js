import {useQuery, useMutation} from '@apollo/react-hooks';
import gql from "graphql-tag";

const GET_CURRENT_TRACK = gql`
    query {
        me {
            player {
                current {
                    name
                    image
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
    
    let current = data ? data.me.player.current : null
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