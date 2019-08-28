import React, {useState} from 'react';
import Playlists from '../playlist/Playlists';

const validateInput = (input) => {
    return input.split(',').map(s => s.trim());//    "2p4PGnQyvoOw9NjJAY1uIC, 37i9dQZF1DWTggY0yqBxES"
}
const PlaylistSearch = () => {
    const [filter, setFilter] = useState([]);
    const handleFilterTextChange = event => setFilter(validateInput(event.target.value));
    return (
        <div>
            <input type="text" placeholder="Search playlist by id..." value={filter} onChange={handleFilterTextChange} />
            <Playlists ids = {filter}/>
        </div>
    )
}

export default PlaylistSearch;