import React from 'react';
const Playlist = (props) => (
    <div className="card" style={{'width': '100%', 'marginTop': '10px'}}>
        <div className="card-body">
            <h5 className="card-title">{props.playlist.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{props.playlist.id}</h6>
            <img src={props.playlist.image} alt="new" />

        </div>
    </div>
);
export default Playlist;