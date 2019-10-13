import React, {useEffect} from "react";
import {MediaControlCard} from './MediaControlCard'
import {MediaCard} from '../MediaCard'
import {Loading, Error} from '../Utils/utils'
import {usePlayer} from './usePlayer'
import {LyricsCard} from './LyricsCard'

const PlayerEx = ({uri}) => {
    const player = usePlayer();
    useEffect(() => {
        let playContext = {}
        if (uri) {
            if (uri.startsWith('spotify:track')) {
                playContext = {
                    "track_uris": [uri]
                }
            }
            else {
                playContext = {
                    context_uri: uri 
                }
            }
        }
        player.handlePlay(playContext)
    }, [uri])
    
    if (player.loading) return (<Loading />)
    if (player.error) return (<Error />)
    return <Player />
}

const Player = () => {
    const player = usePlayer();
    const onPlay = () => {
        const playContext = {}
        return player.handlePlay(playContext);
    }
    if (player.loading) return (<Loading />)
    if (player.error) return (<Error />)
    if (!player.current) return (<MediaCard image = "/spotify_green.jpg" title = "No player active" content = "Make sure that spotify is active on a device" />)
    return (
        <div>
            <MediaControlCard track={player.current} next={player.handleNext} previous={player.handlePrevious} play={onPlay} pause={player.handlePause} />
            <LyricsCard lyrics={player.current.lyrics} />
        </div>
    )
}



export {Player, PlayerEx}
