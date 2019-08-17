import React, {useState} from 'react';
import Artists from '../artist/Artists';

const ArtistSearch = () => {
    const [artistFilter, setArtistFilter] = useState("");
    const handleFilterTextChange = event => setArtistFilter(event.target.value);
    return (
        <div>
            <input type="text" placeholder="Search artist..." value={artistFilter} onChange={handleFilterTextChange} />
            <Artists artistFilter = {artistFilter}/>
        </div>
    )
}

export default ArtistSearch;