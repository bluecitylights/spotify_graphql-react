import React from 'react'
import {MediaControlCard} from './MediaControlCard'
import {MediaCard} from '../MediaCard'
import {Loading, Error} from '../Utils/utils'
import {usePlayer} from './usePlayer'

const Player = () => {
    const player = usePlayer();

    if (player.loading) return (<Loading />)
    if (player.error) return (<Error />)
    if (!player.current) return (<MediaCard image = "/spotify_green.jpg" title = "No player active" content = "Make sure that spotify is active on a device" />)
    return (
        <MediaControlCard image={player.current.image} title={player.current.name} artists={player.current.artists} next={player.handleNext} previous={player.handlePrevious} play={player.handlePlay} pause={player.handlePause}/>
    )
}

export {Player}
